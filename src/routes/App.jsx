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
      const userPreferences = Cookies.get("userPreferences");

      if (userPreferences) {
        const parsedSettings = JSON.parse(userPreferences);
        setTimerSettings((prevSettings) => ({
          ...prevSettings,
          pomodoro: Number(parsedSettings.pomodoro),
          shortBreak: Number(parsedSettings.shortBreak),
          longBreak: Number(parsedSettings.longBreak),
          sessionRounds: Number(parsedSettings.sessionRounds),
          notificationSound: parsedSettings.notificationSound,
          volumeLevel: Number(parsedSettings.volumeLevel),
          autoStartPomodoro: parsedSettings.autoStartPomodoro === true,
          autoStartBreak: parsedSettings.autoStartBreak === true,
        }));
      }
    };

    loadSettingsFromCookies();
  }, []);

  const handleSaveTimerSettings = (newSettings) => {
    setTimerSettings(newSettings);
    Cookies.set("userPreferences", JSON.stringify(newSettings), { expires: 365, sameSite: "Lax", secure: true })
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
