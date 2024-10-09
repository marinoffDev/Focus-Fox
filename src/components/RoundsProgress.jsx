import { Progress } from "@/components/ui/progress"

export default function RoundsProgress({pomodoroRounds, sessionRounds}) {
  return <div>
    <p className="mt-8 mb-2 text-center font-semibold text-muted-foreground">{'Rounds Completed:'} {pomodoroRounds}{'/'}{sessionRounds}</p>
    <Progress value={(pomodoroRounds/sessionRounds) * 100}></Progress>
  </div>
}