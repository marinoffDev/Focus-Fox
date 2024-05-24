export default function HowToUse() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <h1 className="m-4 text-5xl font-black">Focus Fox</h1>
      <h2 className="mb-20 text-3xl font-bold text-muted-foreground">
        Your Go-To Online Timer for Enhanced Productivity
      </h2>
      <h3 className="text-3xl font-extrabold">What is Focus Fox?</h3>
      <p className="mb-20 w-3/6 pt-4 font-semibold text-muted-foreground">
        Focus Fox is an adaptable Pomodoro timer accessible on both desktop and
        mobile browsers. Its primary goal is to assist you in maintaining
        concentration on tasks like studying, writing, or programming. The
        design of this application is based on the Pomodoro Technique, a time
        management system developed by Francesco Cirillo.
      </p>
      <h3 className="text-3xl font-extrabold">
        Understanding the Pomodoro Technique:
      </h3>
      <p className="mb-20 w-3/6 pt-4 font-semibold text-muted-foreground">{`The Pomodoro Technique is a method designed to improve efficiency in work and study environments. It involves using a timer to divide work into fixed intervals, typically 25 minutes, interspersed with brief rest periods. These intervals are referred to as "pomodoros," named after the tomato-shaped kitchen timer Cirillo utilized during his time at university.`}</p>
      <h3 className="text-3xl font-extrabold">
        How to Use the Focus Fox Timer:
      </h3>
      <ol className="m-4 w-3/6 list-decimal pl-10 font-semibold text-muted-foreground">
        <li>Customize the timer settings to fit your preferences.</li>
        <li>Choose a task to focus on.</li>
        <li>{`Start the Pomodoro timer and concentrate solely on your task for the set duration (default: 25 minutes).`}</li>
        <li>{`Take a short break after each Pomodoro (default: 5 minutes).`}</li>
        <li>{`After several Pomodoros, opt for a longer break (default: 15 minutes after every 4 cycles).`}</li>
        <li>Repeat steps 3-5 until all your tasks are completed.</li>
      </ol>
    </div>
  );
}
