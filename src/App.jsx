import Navbar from './components/Navbar.jsx'
import Timer from '@/components/Timer.jsx';
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <Navbar />
      <Timer className='flex-grow' />
    </>
  )
}

export default App
