import { useNavigate } from "react-router-dom";
import FooterCopyright from "./FooterCopyright";
import { Button } from "@/components/ui/button";
import GitHubBtn from "@/components/ui/GitHubBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp, faFingerprint, faAsterisk, faMugSaucer } from "@fortawesome/free-solid-svg-icons";

export default function Footer({ scrollToHome }) {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <footer className="relative m-4  mx-auto flex max-w-2xl flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
        <Button variant="ghost" onClick={scrollToHome}>
        <FontAwesomeIcon icon={faCircleChevronUp} size="lg" className="mr-2" />
          Back to Top
        </Button>
        <Button variant="ghost" onClick={() => handleNavigation('/Focus-Fox/Privacy/')}>
          <FontAwesomeIcon icon={faFingerprint} size="lg" className="mr-2" />Privacy Policy
        </Button>
        <Button variant="ghost" onClick={() => handleNavigation('/Focus-Fox/Terms/')}>
          <FontAwesomeIcon icon={faAsterisk} size="lg" className="mr-2" />Terms and Conditions
        </Button>
        <GitHubBtn variant="ghost" />
        <a href='https://ko-fi.com/marinoffdev' target='_blank' rel="noopener noreferrer">
          <Button variant="ghost" target='_blank'>
            <FontAwesomeIcon icon={faMugSaucer} size="lg" className="mr-2" />Buy Me a Coffee
          </Button>
        </a>
      </footer>
      <FooterCopyright />
    </>
  );
}
