import { useState } from "react";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import FooterCopyright from "./FooterCopyright";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function LegalPageLayout({navigateToRoute, navigateToRouteLabel, pageTitle, effectiveDateText, children}) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="relative mx-auto max-w-3xl p-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? (
                <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
              )}
            </button>
          </div>
          <div className="hidden sm:flex space-x-4 items-center">
            <Button onClick={() => navigate(navigateToRoute)} variant="ghost">
              {navigateToRouteLabel}
            </Button>
            <Button onClick={() => navigate("/Focus-Fox/")} variant="ghost">
              Go Back Home
            </Button>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden flex flex-col items-center space-y-4 mt-4">
            <Button onClick={() => navigate(navigateToRoute)} variant="ghost">
              {navigateToRouteLabel}
            </Button>
            <Button onClick={() => navigate("/Focus-Fox/")} variant="ghost">
              Go Back Home
            </Button>
          </div>
        )}
      </nav>
      <Separator className="m-auto block max-w-3xl" />
      <div className="flex flex-col items-center justify-center m-auto py-4 max-w-3xl text-pretty container">
        <div className="my-4 font-semibold text-muted-foreground">
          <div className="flex flex-col justify-center items-center pb-2">
            <h1 className="text-4xl font-bold">{pageTitle}</h1>
          </div>
          <p className="py-2">Effective date: {effectiveDateText}</p>
          {children}
        </div>
      </div>
      <Separator className="m-auto block max-w-3xl mb-4" />
      <FooterCopyright />
    </>
  );
}