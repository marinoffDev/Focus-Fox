import { useState, useEffect, useRef, useCallback } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimerCard from "@/components/TimerCard.jsx";
import { formatTime } from "@/lib/utils";
import { notificationSounds } from "@/lib/notificationSounds"

export default function Timer({ settings }) {
  const { pomodoro, shortBreak, longBreak, sessionRounds, notificationSound, autoStartPomodoro, autoStartBreak } = settings;
  const [activeTimer, setActiveTimer] = useState("pomodoro");
  const [time, setTime] = useState(pomodoro);
  const [remainingTime, setRemainingTime] = useState(pomodoro);
  const [timerActive, setTimerActive] = useState(false);
  const [pomodoroRounds, setpomodoroRounds] = useState(0);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);
  const audioRef = useRef(new Audio(notificationSound || notificationSounds["Mission Accomplished"]));

  const startTimer = useCallback(() => {
    setTimerActive(true);
  }, []);

  const stopTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    setTimerActive(false);
  }, []);

  const switchTimer = useCallback((timerType, autoSwitchedTab) => {
    setActiveTimer(timerType);
    stopTimer();

    if (timerType === "pomodoro") {
      setTime(pomodoro);
      setRemainingTime(pomodoro);
      if (pomodoroRounds === sessionRounds) {
        setpomodoroRounds(0);
      }
      if (autoStartPomodoro && autoSwitchedTab) {
        startTimer();
      }
    } else if (timerType === "shortBreak") {
      setTime(shortBreak);
      setRemainingTime(shortBreak);
      if (autoStartBreak && autoSwitchedTab) {
        startTimer();
      }
    } else if (timerType === "longBreak") {
      setTime(longBreak);
      setRemainingTime(longBreak);
      if (autoStartBreak && autoSwitchedTab) {
        startTimer();
      }
    }
  }, [pomodoro, shortBreak, longBreak, pomodoroRounds, sessionRounds, autoStartPomodoro, autoStartBreak, startTimer, stopTimer]);

  const handleTimerExpiration = useCallback((timerExpiredManually) => {
    if (timerExpiredManually) {
      audioRef.current.play();
      showNotification(activeTimer === "pomodoro" ? 
        "Pomodoro finished. Time for a break! 🎉" : 
        "Break time is over! Let's focus! 🦊💻"
      );
    }
    if (activeTimer === "pomodoro") {
      setpomodoroRounds((prevRounds) => prevRounds + 1);
      if (pomodoroRounds + 1 === sessionRounds) {
        switchTimer("longBreak", timerExpiredManually);
      } else {
        switchTimer("shortBreak", timerExpiredManually);
      }
    } else if (activeTimer === "shortBreak" || activeTimer === "longBreak") {
      switchTimer("pomodoro", timerExpiredManually);
    }
  }, [activeTimer, pomodoroRounds, sessionRounds, switchTimer]);

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
    }
    return () => clearInterval(intervalRef.current);
  }, [timerActive, remainingTime, handleTimerExpiration]);

  useEffect(() => {
    if (timerActive) {
      document.title = `${formatTime(time)} - Focus Fox`;
      requestNotificationPermission();
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
    if (pomodoroRounds > sessionRounds) {
      setpomodoroRounds(0);
    }
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
  }, [pomodoro, shortBreak, longBreak, activeTimer, pomodoroRounds, sessionRounds]);

  useEffect(() => {
    audioRef.current = new Audio(notificationSound);
  }, [notificationSound]);

  const requestNotificationPermission = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  };

  const showNotification = (message) => {
    if (Notification.permission === "granted") {
      new Notification("Focus Fox", {
        body: message,
        icon: "https://res.cloudinary.com/grffn/image/upload/v1716236444/Focus-Fox/logo.png",
      });
    }
  };
  
  return (
    <div className="my-14 flex flex-col items-center justify-center">
      <Tabs defaultValue="pomodoro" value={activeTimer} onValueChange={switchTimer} className="w-full max-w-[400px] sm:w-[400px]">
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
        <p className="my-8 text-center font-semibold text-muted-foreground">{'Rounds Completed:'} {pomodoroRounds}{'/'}{sessionRounds}</p>
      </Tabs>
    </div>
  );
}