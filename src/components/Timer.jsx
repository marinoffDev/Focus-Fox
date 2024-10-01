import { useState, useEffect, useRef, useCallback } from "react";
import { formatTime } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimerCard from "@/components/TimerCard.jsx";

export default function Timer({ settings }) {
  const { pomodoro, shortBreak, longBreak } = settings;

  const cyclesBeforeLongBreak = 4;

  const [activeTimer, setActiveTimer] = useState("pomodoro");
  const [time, setTime] = useState(pomodoro);
  const [remainingTime, setRemainingTime] = useState(pomodoro);
  const [timerActive, setTimerActive] = useState(false);
  const [pomodoroCycles, setPomodoroCycles] = useState(0);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);

  const audioUrl = import.meta.env.VITE_NOTIFICATION_SOUND_URL || "https://res.cloudinary.com/grffn/video/upload/v1727131856/Focus-Fox/notification.mp3";
  const audioRef = useRef(new Audio(audioUrl));

  const switchTimer = useCallback((timerType) => {
    setActiveTimer(timerType);
    setTimerActive(false);

    if (timerType === "pomodoro") {
      setTime(pomodoro);
      setRemainingTime(pomodoro);
      if (pomodoroCycles === cyclesBeforeLongBreak) {
        setPomodoroCycles(0);
      }
    } else if (timerType === "shortBreak") {
      setTime(shortBreak);
      setRemainingTime(shortBreak);
    } else if (timerType === "longBreak") {
      setTime(longBreak);
      setRemainingTime(longBreak);
    }
  }, [pomodoro, shortBreak, longBreak, pomodoroCycles, cyclesBeforeLongBreak]);

  const handleTimerExpiration = useCallback((playNotificationSound) => {
    if (playNotificationSound) {
      audioRef.current.play();
    }
    if (activeTimer === "pomodoro") {
      setPomodoroCycles((prevCycles) => prevCycles + 1);
      if (pomodoroCycles + 1 === cyclesBeforeLongBreak) {
        switchTimer("longBreak");
      } else {
        switchTimer("shortBreak");
      }
    } else if (activeTimer === "shortBreak" || activeTimer === "longBreak") {
      switchTimer("pomodoro");
    }
  }, [activeTimer, pomodoroCycles, cyclesBeforeLongBreak, switchTimer]);

  useEffect(() => {
    if (timerActive) {
      startTimeRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTimeRef.current) / 1000);
        const newTime = remainingTime - elapsedTime;

        if (newTime <= 0) {
          clearInterval(intervalRef.current);
          setTime(0);
          setTimerActive(false);
          handleTimerExpiration(true);
        } else {
          setTime(newTime);
        }
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [timerActive, remainingTime, handleTimerExpiration]);

  useEffect(() => {
    if (timerActive) {
      document.title = `${formatTime(time)} - Focus Fox`;
    } else {
      document.title = "Focus Fox";
    }
  }, [time, timerActive]);

  const handleTimer = () => {
    if (timerActive) {
      setRemainingTime(time);
    }
    setTimerActive(!timerActive);
  };

  const resetTimer = () => {
    if (activeTimer === "pomodoro") {
      setTime(pomodoro);
      setRemainingTime(pomodoro);
      handleTimerExpiration(false);
    } else if (activeTimer === "shortBreak") {
      setTime(shortBreak);
      setRemainingTime(shortBreak);
      handleTimerExpiration(false);
    } else if (activeTimer === "longBreak") {
      setTime(longBreak);
      setRemainingTime(longBreak);
      handleTimerExpiration(false);
    }
    setTimerActive(false);
  };

    useEffect(() => {
    if (activeTimer === "pomodoro") {
      setTime(pomodoro);
      setRemainingTime(pomodoro);
    } else if (activeTimer === "shortBreak") {
      setTime(shortBreak);
      setRemainingTime(shortBreak);
    } else if (activeTimer === "longBreak") {
      setTime(longBreak);
      setRemainingTime(longBreak);
    }
  }, [pomodoro, shortBreak, longBreak, activeTimer]);

  return (
    <div className="mt-14 flex items-center justify-center">
      <Tabs defaultValue="pomodoro" value={activeTimer} onValueChange={switchTimer} className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger
            value="pomodoro"
            disabled={timerActive}
            className={timerActive ? "cursor-not-allowed opacity-50" : ""}
          >
            Pomodoro
          </TabsTrigger>
          <TabsTrigger
            value="shortBreak"
            disabled={timerActive}
            className={timerActive ? "cursor-not-allowed opacity-50" : ""}
          >
            Short Break
          </TabsTrigger>
          <TabsTrigger
            value="longBreak"
            disabled={timerActive}
            className={timerActive ? "cursor-not-allowed opacity-50" : ""}
          >
            Long Break
          </TabsTrigger>
        </TabsList>
        <TabsContent value="pomodoro">
          <TimerCard
            time={formatTime(time)}
            isActive={timerActive && activeTimer === "pomodoro"}
            onClick={handleTimer}
            onReset={resetTimer}
            buttonText={timerActive ? "Pause" : time < pomodoro ? "Resume" : "Start"}
          />
        </TabsContent>
        <TabsContent value="shortBreak">
          <TimerCard
            time={formatTime(time)}
            isActive={timerActive && activeTimer === "shortBreak"}
            onClick={handleTimer}
            onReset={resetTimer}
            buttonText={timerActive ? "Pause" : time < shortBreak ? "Resume" : "Start"}
          />
        </TabsContent>
        <TabsContent value="longBreak">
          <TimerCard
            time={formatTime(time)}
            isActive={timerActive && activeTimer === "longBreak"}
            onClick={handleTimer}
            onReset={resetTimer}
            buttonText={timerActive ? "Pause" : time < longBreak ? "Resume" : "Start"}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}