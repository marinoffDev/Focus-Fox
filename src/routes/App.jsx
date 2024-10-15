import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar.jsx";
import Timer from "@/components/Timer.jsx";
import Footer from "@/components/Footer.jsx";
import HowToUse from "@/components/HowToUse.jsx";
import { Toaster } from "@/components/ui/toaster"
import { defaultSettings } from "@/lib/defaultSettings"
import Cookies from "js-cookie";

function App() {
  const refs = {
    navbar: useRef(),
    howToUse: useRef(),
  };

  const [timerSettings, setTimerSettings] = useState(defaultSettings);

  useEffect(() => {
    const loadSettingsFromCookies = () => {
      const pomodoroCookie = Cookies.get("pomodoro");
      const shortBreakCookie = Cookies.get("shortBreak");
      const longBreakCookie = Cookies.get("longBreak");
      const sessionRoundsCookie = Cookies.get("sessionRounds");
      const notificationSoundCookie = Cookies.get("notificationSound");
      const autoStartPomodoroCookie = Cookies.get("autoStartPomodoro");
      const autoStartBreakCookie = Cookies.get("autoStartBreak");

      if (pomodoroCookie && shortBreakCookie && longBreakCookie && 
        sessionRoundsCookie && notificationSoundCookie && 
        autoStartPomodoroCookie && autoStartBreakCookie) {
        setTimerSettings((prevSettings) => ({
          ...prevSettings,
          pomodoro: Number(pomodoroCookie),
          shortBreak: Number(shortBreakCookie),
          longBreak: Number(longBreakCookie),
          sessionRounds: Number(sessionRoundsCookie),
          notificationSound: notificationSoundCookie,
          autoStartPomodoro: autoStartPomodoroCookie === "true",
          autoStartBreak: autoStartBreakCookie === "true"
        }));
      }
    };

    loadSettingsFromCookies();
  }, []);

  const handleSaveTimerSettings = (newSettings) => {
    setTimerSettings(newSettings);
    Cookies.set("pomodoro", newSettings.pomodoro, { expires: 365 });
    Cookies.set("shortBreak", newSettings.shortBreak, { expires: 365 });
    Cookies.set("longBreak", newSettings.longBreak, { expires: 365 });
    Cookies.set("sessionRounds", newSettings.sessionRounds, { expires: 365 });
    Cookies.set("notificationSound", newSettings.notificationSound, { expires: 365 });
    Cookies.set("autoStartPomodoro", newSettings.autoStartPomodoro, { expires: 365 });
    Cookies.set("autoStartBreak", newSettings.autoStartBreak, { expires: 365 });
  };

  const handleScrollToSection = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        ref={refs.navbar}
        scrollToHowToUse={() => handleScrollToSection("howToUse")}
        onSaveTimerSettings={handleSaveTimerSettings}
        timerSettings={timerSettings}
      />
      <main>
        <Toaster />
        <section className="min-h-90svh">
          <Timer settings={timerSettings} />
        </section>
        <section ref={refs.howToUse} className="min-h-90svh bg-secondary">
          <HowToUse />
        </section>
      </main>
      <Footer scrollToHome={() => handleScrollToSection("navbar")} />
    </>
  );
}

export default App;
