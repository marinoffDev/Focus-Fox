import { forwardRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";
import GitHubBtn from "@/components/ui/GitHubBtn";
import Logo from "@/components/ui/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faCircleInfo, faGear } from "@fortawesome/free-solid-svg-icons";

export default forwardRef(function Navbar({ scrollToHowToUse }, ref) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav ref={ref} className="relative mx-auto mt-4 max-w-3xl">
        <div className="flex items-center justify-between p-4">
          <Logo />
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <FontAwesomeIcon icon={faTimes} className="w-6 h-6" /> : <FontAwesomeIcon icon={faBars} className="w-6 h-6" />}
            </button>
          </div>
          <div className="hidden sm:flex space-x-4 items-center">
            <Button variant="outline" onClick={scrollToHowToUse}>
              <FontAwesomeIcon icon={faCircleInfo} size="lg" className="mr-2" />How to Use
            </Button>
            <Button variant="outline">
              <FontAwesomeIcon icon={faGear} size="lg" className="mr-2" />Customize
            </Button>
            <GitHubBtn variant="outline" />
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <ModeToggle />
            </ThemeProvider>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden flex flex-col items-center space-y-4 mt-4">
            <Button variant="outline" onClick={scrollToHowToUse}>
              <FontAwesomeIcon icon={faCircleInfo} className="mr-2" />How to use
            </Button>
            <Button variant="outline">
              <FontAwesomeIcon icon={faGear} size="lg" className="mr-2" />Customize
            </Button>
            <GitHubBtn variant="outline" />
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <ModeToggle />
            </ThemeProvider>
          </div>
        )}
      </nav>
      <Separator className="m-auto mt-4 block max-w-3xl" />
    </>
  );
});
