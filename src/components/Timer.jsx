import { useState, useEffect, useRef } from "react";
import { formatTime } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimerCard from "@/components/TimerCard.jsx";

export default function Timer() {
  const defaultTime = 10 * 60;
  const [time, setTime] = useState(defaultTime);
  const [timerActive, setTimerActive] = useState(false);
  const intervalRef = useRef(null); // Ref to hold the interval ID
  const startTimeRef = useRef(null); // Ref to store the start time
  let btnLabel = defaultTime > time ? "Resume" : "Start";

  useEffect(() => {
    if (timerActive) {
      startTimeRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTimeRef.current) / 1000);
        const newTime = defaultTime - elapsedTime;
        if (newTime <= 0) {
          clearInterval(intervalRef.current);
          setTime(0);
          setTimerActive(false);
        } else {
          setTime(newTime);
        }
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [timerActive]);

  useEffect(() => {
    if (timerActive) {
      document.title = `${formatTime(time)} - Focus Fox`;
    } else {
      document.title = "Focus Fox";
    }
  }, [time, timerActive]);

  const handleTimer = () => {
    setTimerActive(!timerActive);
  };

  return (
    <div className="mt-14 flex items-center justify-center">
      <Tabs defaultValue="pomodoro" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pomodoro">Pomodoro</TabsTrigger>
          <TabsTrigger value="shortBreak">Short Break</TabsTrigger>
          <TabsTrigger value="longBreak">Long Break</TabsTrigger>
        </TabsList>
        <TabsContent value="pomodoro">
          <TimerCard
            time={formatTime(time)}
            isActive={timerActive}
            onClick={handleTimer}
            buttonText={timerActive ? "Pause" : btnLabel}
          />
        </TabsContent>
        <TabsContent value="shortBreak">
          <TimerCard
            time={formatTime(5 * 60)}
            onClick={() => console.log("clicked short break")}
            buttonText={timerActive ? "Pause" : btnLabel}
            disabled={"cursor-not-allowed opacity-50"}
          />
        </TabsContent>
        <TabsContent value="longBreak">
          <TimerCard
            time={formatTime(15 * 60)}
            onClick={() => console.log("clicked long break")}
            buttonText={timerActive ? "Pause" : btnLabel}
            disabled={"cursor-not-allowed opacity-50"}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}