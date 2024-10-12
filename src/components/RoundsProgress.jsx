export default function RoundsProgress({pomodoroRounds, sessionRounds}) {
  return <p className="mt-8 mb-2 text-center font-semibold text-muted-foreground">{'Rounds Completed:'} {pomodoroRounds}{'/'}{sessionRounds}</p>
}