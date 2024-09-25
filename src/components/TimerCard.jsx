import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";

export default function TimerCard({
  time,
  isActive,
  onClick,
  onReset,
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
      <CardFooter className="flex justify-center relative">
        <Button
          className={`w-32 mx-auto ` + disabledStyles}
          variant={isActive ? "secondary" : "default"}
          onClick={onClick}
        >
          {buttonText}
        </Button>
        {buttonText !== "Start" && (
          <Button
            className="w-12 absolute right-8"
            variant="ghost"
            onClick={onReset}
          >
            <FontAwesomeIcon icon={faForward} className="fa-lg" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}