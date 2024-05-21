import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Separator } from "@/components/ui/separator";
import GitHubBtn from "@/components/ui/GitHubBtn";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  return (
    <>
      <nav className='relative mx-auto flex justify-center items-center space-x-4 mt-4'>
        <Logo />
        <Button variant="secondary">How to use</Button>
        <GitHubBtn />
        <Button>Customize</Button>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ModeToggle />
        </ThemeProvider>
      </nav>
      <Separator className='my-4' />
    </>
  )
}