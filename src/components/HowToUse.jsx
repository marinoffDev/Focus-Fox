export default function HowToUse() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <h1 className="m-4 text-4xl font-black text-center md:text-5xl">Focus Fox</h1>
      <h2 className="mb-10 text-xl font-bold text-muted-foreground text-center md:text-3xl md:mb-20">
        Your Go-To Online Timer for Enhanced Productivity
      </h2>
      <h3 className="text-2xl font-extrabold text-center md:text-3xl">What is Focus Fox?</h3>
      <p className="mb-10 w-11/12 pt-4 font-semibold text-muted-foreground text-justify md:w-7/12 md:mb-20">
        Focus Fox is an adaptable Pomodoro timer accessible on both desktop and
        mobile browsers. Its primary goal is to assist you in maintaining
        concentration on tasks like studying, writing, or programming. The
        design of this application is based on the Pomodoro Technique, a time
        management system developed by Francesco Cirillo.
      </p>
      <h3 className="text-2xl font-extrabold text-center md:text-3xl">
        Understanding the Pomodoro Technique:
      </h3>
      <p className="mb-10 w-11/12 pt-4 font-semibold text-muted-foreground text-justify md:w-7/12 md:mb-20">
        {`The Pomodoro Technique is a method designed to improve efficiency in work and study environments. It involves using a timer to divide work into fixed intervals, typically 25 minutes, interspersed with brief rest periods. These intervals are referred to as "pomodoros," named after the tomato-shaped kitchen timer Cirillo utilized during his time at university.`}
      </p>
      <h3 className="text-2xl font-extrabold text-center md:text-3xl">
        How to Use the Focus Fox Timer:
      </h3>
      <ol className="m-4 w-11/12 list-decimal pl-6 font-semibold text-muted-foreground text-left md:w-7/12 md:pl-10">
        <li>Customize the timer settings to fit your preferences.</li>
        <li>Choose a task to focus on.</li>
        <li>{`Start the Pomodoro timer and concentrate solely on your task for the set duration (default: 25 minutes).`}</li>
        <li>{`Take a short break after each Pomodoro (default: 5 minutes).`}</li>
        <li>{`After several Pomodoros, opt for a longer break (default: 15 minutes after every 4 rounds).`}</li>
        <li>Repeat steps 3-5 until all your tasks are completed.</li>
      </ol>
    </div>
  );
}
