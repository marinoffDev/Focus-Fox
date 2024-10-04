import { forwardRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";
import GitHubBtn from "@/components/ui/GitHubBtn";
import Customize from "./Customize";
import Logo from "@/components/ui/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default forwardRef(function Navbar({ scrollToHowToUse, timerSettings, onSaveTimerSettings }, ref) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav ref={ref} className="relative mx-auto max-w-3xl">
        <div className="flex items-center justify-between p-4">
          <Logo />
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <FontAwesomeIcon icon={faTimes} className="w-6 h-6" /> : <FontAwesomeIcon icon={faBars} className="w-6 h-6" />}
            </button>
          </div>
          <div className="hidden sm:flex space-x-4 items-center">
            <Button variant="ghost" onClick={scrollToHowToUse}>
              <FontAwesomeIcon icon={faCircleInfo} size="lg" className="mr-2" />How to Use
            </Button>
            <Customize 
              timerSettings={timerSettings} 
              onSaveTimerSettings={onSaveTimerSettings} 
            />
            <GitHubBtn variant="ghost" />
            <ModeToggle />
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden flex flex-col items-center space-y-4 mb-4">
            <Button variant="ghost" onClick={scrollToHowToUse}>
              <FontAwesomeIcon icon={faCircleInfo} size="lg" className="mr-2" />How to Use
            </Button>
            <Customize 
              timerSettings={timerSettings} 
              onSaveTimerSettings={onSaveTimerSettings} 
            />
            <GitHubBtn variant="ghost" />
            <ModeToggle />
          </div>
        )}
      </nav>
      <Separator className="m-auto block max-w-3xl" />
    </>
  );
});
