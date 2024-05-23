import { useRef } from 'react';
import Navbar from '@/components/Navbar.jsx'
import Timer from '@/components/Timer.jsx';
import Footer from '@/components/Footer.jsx'
import HowToUse from '@/components/HowToUse.jsx';

function App() {
  const refs = {
    navbar: useRef(),
    howToUse: useRef()
  };

  const handleScrollToSection = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar ref={refs.navbar} scrollToHowToUse={() => handleScrollToSection("howToUse")} />
      <main>
        <section className='min-h-90svh'>
          <Timer />
        </section>
        <section ref={refs.howToUse} className='min-h-90svh bg-secondary'>
          <HowToUse />
        </section>
      </main>
      <Footer scrollToHome={() => handleScrollToSection("navbar")} />
    </>
  )
}

export default App
