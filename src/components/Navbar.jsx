import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Separator } from "@/components/ui/separator"

export default function Navbar() {
  return (
    <>
      <nav className='relative mx-auto flex justify-center items-center space-x-4 mt-4'>
        <div className="flex justify-center items-center">
          <img className='w-10' src='https://res.cloudinary.com/grffn/image/upload/v1716236444/Focus-Fox/logo.png' alt='logo' />
          <p className="font-bold">Focus Fox</p>
        </div>
        <Button variant="secondary">How to use</Button>
        <Button variant="secondary">GitHub</Button>
        <Button>Customize</Button>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ModeToggle />
        </ThemeProvider>
      </nav>
      <Separator className='my-4' />
    </>
  )
}