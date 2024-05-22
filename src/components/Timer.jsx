import { useState, useEffect } from 'react'
import { formatTime } from '@/lib/utils'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import TimerCard from '@/components/TimerCard.jsx';

export default function Timer() {
  const defaultTime = 25 * 60;
  const [time, setTime] = useState(defaultTime);
  const [timerActive, setTimerActive] = useState(false);
  let btnLabel = defaultTime > time ? "Resume" : "Start";
  
  useEffect(() => {
    let ticker;
    if (timerActive) {
      ticker = setInterval(() => {
        setTime(prevTime => {
          if (prevTime === 0) {
            clearInterval(ticker);
            setTimerActive(false);
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(ticker);
  }, [timerActive])

  const handleTimer = () => {
    timerActive ? setTimerActive(false) : setTimerActive(true);
  };

  return (
    <div className='flex justify-center items-center mt-14'>
      <Tabs defaultValue="pomodoro" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pomodoro">Pomodoro</TabsTrigger>
          <TabsTrigger value="shortBreak">Short Break</TabsTrigger>
          <TabsTrigger value="longBreak">Long Break</TabsTrigger>
        </TabsList>
        <TabsContent value="pomodoro">
          <TimerCard time={formatTime(time)} isActive={timerActive} onClick={handleTimer} buttonText={timerActive ? "Pause" : btnLabel} />
        </TabsContent>
        <TabsContent value="shortBreak">
          <TimerCard time={formatTime(5 * 60)} onClick={() => console.log("clicked short break")} buttonText={"Start"} disabled={'cursor-not-allowed opacity-50'} />
        </TabsContent>
        <TabsContent value="longBreak">
          <TimerCard time={formatTime(15 * 60)} onClick={() => console.log("clicked long break")} buttonText={"Start"} disabled={'cursor-not-allowed opacity-50'}/>
        </TabsContent>
      </Tabs>
    </div>
  )
}