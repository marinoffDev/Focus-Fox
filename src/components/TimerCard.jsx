import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
export default function TimerCard({time, isActive, onClick, buttonText, disabled: disabledStyles}) {
  return (
    <Card>
    <CardContent className='flex justify-center items-center mt-6'>
      <Label htmlFor="timer" className='font-bold text-8xl'>{time}</Label>
    </CardContent>
    <CardFooter className='flex justify-center items-center'>
      <Button className={`w-32 ` + disabledStyles } variant={isActive ? "secondary" : "default"} onClick={onClick}>
        {buttonText}
      </Button>
    </CardFooter>
  </Card>
  )
}