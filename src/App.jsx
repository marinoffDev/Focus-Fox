import Navbar from '@/components/Navbar.jsx'
import Timer from '@/components/Timer.jsx';
import Footer from '@/components/Footer.jsx'
import HowToUse from '@/components/HowToUse.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className='min-h-dvh'>
          <Timer />
        </section>
        <section className='min-h-dvh bg-secondary'>
          <HowToUse />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
