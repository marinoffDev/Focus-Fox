import { useRef, useState } from "react";
import Navbar from "@/components/Navbar.jsx";
import Timer from "@/components/Timer.jsx";
import Footer from "@/components/Footer.jsx";
import HowToUse from "@/components/HowToUse.jsx";
import { defaultSettings } from "@/lib/defaultSettings"

function App() {
  const refs = {
    navbar: useRef(),
    howToUse: useRef(),
  };

  const handleScrollToSection = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [timerSettings, setTimerSettings] = useState(defaultSettings);

  return (
    <>
      <Navbar
        ref={refs.navbar}
        scrollToHowToUse={() => handleScrollToSection("howToUse")}
        onSaveTimerSettings={(newSettings) => setTimerSettings(newSettings)}
        timerSettings={timerSettings}
      />
      <main>
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
