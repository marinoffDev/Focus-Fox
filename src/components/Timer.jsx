import { useState, useEffect, useRef, useCallback } from "react";
import { formatTime } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimerCard from "@/components/TimerCard.jsx";

export default function Timer() {
  const pomodoroTime = 25 * 60;
  const shortBreakTime = 5 * 60;
  const longBreakTime = 15 * 60;
  const cyclesBeforeLongBreak = 4;

  const [activeTimer, setActiveTimer] = useState("pomodoro");
  const [time, setTime] = useState(pomodoroTime);
  const [remainingTime, setRemainingTime] = useState(pomodoroTime);
  const [timerActive, setTimerActive] = useState(false);
  const [pomodoroCycles, setPomodoroCycles] = useState(0);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);

  const audioUrl = import.meta.env.VITE_NOTIFICATION_SOUND_URL || "https://res.cloudinary.com/grffn/video/upload/v1727131856/Focus-Fox/notification.mp3";
  const audioRef = useRef(new Audio(audioUrl));

  // Memoize the switchTimer function
  const switchTimer = useCallback((timerType) => {
    setActiveTimer(timerType); // Set the active timer
    setTimerActive(false); // Pause the current timer

    // Reset time based on the selected timer
    if (timerType === "pomodoro") {
      setTime(pomodoroTime);
      setRemainingTime(pomodoroTime);
      if (pomodoroCycles === cyclesBeforeLongBreak) {
        setPomodoroCycles(0); // Reset cycles after a long break
      }
    } else if (timerType === "shortBreak") {
      setTime(shortBreakTime);
      setRemainingTime(shortBreakTime);
    } else if (timerType === "longBreak") {
      setTime(longBreakTime);
      setRemainingTime(longBreakTime);
    }
  }, [pomodoroTime, shortBreakTime, longBreakTime, pomodoroCycles, cyclesBeforeLongBreak]);

  // Handle timer expiration and auto-switch logic
  const handleTimerExpiration = useCallback((playNotificationSound) => {
    if (playNotificationSound) {
      audioRef.current.play(); // Play notification sound
    }
    if (activeTimer === "pomodoro") {
      setPomodoroCycles((prevCycles) => prevCycles + 1); // Increment the Pomodoro cycle
      if (pomodoroCycles + 1 === cyclesBeforeLongBreak) {
        // After 4 Pomodoros, switch to Long Break
        switchTimer("longBreak");
      } else {
        // Otherwise, switch to Short Break
        switchTimer("shortBreak");
      }
    } else if (activeTimer === "shortBreak" || activeTimer === "longBreak") {
      // After a break, switch back to Pomodoro
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
          handleTimerExpiration(true); // Call auto-switch logic on expiration
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
      setRemainingTime(time); // Save remaining time when pausing
    }
    setTimerActive(!timerActive);
  };

  const resetTimer = () => {
    if (activeTimer === "pomodoro") {
      setTime(pomodoroTime);
      setRemainingTime(pomodoroTime);
      handleTimerExpiration(false);
    } else if (activeTimer === "shortBreak") {
      setTime(shortBreakTime);
      setRemainingTime(shortBreakTime);
      handleTimerExpiration(false);
    } else if (activeTimer === "longBreak") {
      setTime(longBreakTime);
      setRemainingTime(longBreakTime);
      handleTimerExpiration(false);
    }
    setTimerActive(false); // Ensure the timer is paused after reset
  };

  return (
    <div className="mt-14 flex items-center justify-center">
      <Tabs defaultValue="pomodoro" value={activeTimer} onValueChange={switchTimer} className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger
            value="pomodoro"
            disabled={timerActive} // Disable when timer is running
            className={timerActive ? "cursor-not-allowed opacity-50" : ""}
          >
            Pomodoro
          </TabsTrigger>
          <TabsTrigger
            value="shortBreak"
            disabled={timerActive} // Disable when timer is running
            className={timerActive ? "cursor-not-allowed opacity-50" : ""}
          >
            Short Break
          </TabsTrigger>
          <TabsTrigger
            value="longBreak"
            disabled={timerActive} // Disable when timer is running
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
            buttonText={timerActive ? "Pause" : time < pomodoroTime ? "Resume" : "Start"}
          />
        </TabsContent>
        <TabsContent value="shortBreak">
          <TimerCard
            time={formatTime(time)}
            isActive={timerActive && activeTimer === "shortBreak"}
            onClick={handleTimer}
            onReset={resetTimer}
            buttonText={timerActive ? "Pause" : time < shortBreakTime ? "Resume" : "Start"}
          />
        </TabsContent>
        <TabsContent value="longBreak">
          <TimerCard
            time={formatTime(time)}
            isActive={timerActive && activeTimer === "longBreak"}
            onClick={handleTimer}
            onReset={resetTimer}
            buttonText={timerActive ? "Pause" : time < longBreakTime ? "Resume" : "Start"}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}