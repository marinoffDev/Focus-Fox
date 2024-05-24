import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";
import GitHubBtn from "@/components/ui/GitHubBtn";
import Logo from "@/components/ui/Logo";

export default forwardRef(function Navbar({ scrollToHowToUse }, ref) {
  return (
    <>
      <nav
        ref={ref}
        className="relative mx-auto mt-4 flex max-w-2xl items-center justify-center space-x-4"
      >
        <Logo />
        <Button variant="outline" onClick={scrollToHowToUse}>
          How to use
        </Button>
        <GitHubBtn variant={"outline"} />
        <Button variant="secondary">Customize</Button>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ModeToggle />
        </ThemeProvider>
      </nav>
      <Separator className="m-auto mt-4 block max-w-xl" />
    </>
  );
});
