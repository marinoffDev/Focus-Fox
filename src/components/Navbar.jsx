import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Separator } from "@/components/ui/separator"

export default function Navbar() {
  return (
    <>
      <nav className='relative mx-auto flex justify-center items-center space-x-4 mt-4'>
        <div className='flex space-x-4'>
          <Button variant="ghost">Logo</Button>
          <Button variant="secondary">How to use</Button>
          <Button>Settings</Button>
        </div>
        <div className='absolute right-4 flex items-center'>
          <Button className='m-4'variant="secondary">About</Button>
          <Button variant="secondary">GitHub</Button>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ModeToggle />
          </ThemeProvider>
        </div>
      </nav>
      <Separator className='my-4' />
    </>
  )
}