import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

export default function Timer() {
  return (
    <div className='flex justify-center items-center mt-10'>
      <Tabs defaultValue="pomodoro" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pomodoro">Pomodoro</TabsTrigger>
          <TabsTrigger value="shortBreak">Short Break</TabsTrigger>
          <TabsTrigger value="longBreak">Long Break</TabsTrigger>
        </TabsList>
        <TabsContent value="pomodoro">
          <Card>
            <CardContent className='flex justify-center items-center mt-6'>
                <Label htmlFor="timer" className='font-bold text-8xl'>25:00</Label>
            </CardContent>
            <CardFooter className='flex justify-center items-center'>
              <Button className='w-32'>Start</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="shortBreak">
          <Card>
            <CardContent className='flex justify-center items-center mt-6'>
                <Label htmlFor="timer" className='font-bold text-8xl'>05:00</Label>
            </CardContent>
            <CardFooter className='flex justify-center items-center'>
              <Button className='w-32'>Start</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="longBreak">
          <Card>
            <CardContent className='flex justify-center items-center mt-6'>
                <Label htmlFor="timer" className='font-bold text-8xl'>15:00</Label>
            </CardContent>
            <CardFooter className='flex justify-center items-center'>
              <Button className='w-32'>Start</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}