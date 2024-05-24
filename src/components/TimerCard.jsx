import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
export default function TimerCard({
  time,
  isActive,
  onClick,
  buttonText,
  disabled: disabledStyles,
}) {
  return (
    <Card>
      <CardContent className="mt-6 flex items-center justify-center">
        <Label htmlFor="timer" className="text-8xl font-bold">
          {time}
        </Label>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <Button
          className={`w-32 ` + disabledStyles}
          variant={isActive ? "secondary" : "default"}
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
