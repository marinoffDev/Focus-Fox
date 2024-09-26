import { Button } from "@/components/ui/button";
import GitHubBtn from "@/components/ui/GitHubBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp, faFingerprint, faAsterisk } from "@fortawesome/free-solid-svg-icons";

const year = new Date().getFullYear();

export default function Footer({ scrollToHome }) {
  return (
    <>
      <footer className="relative m-4 pt-4 mx-auto flex max-w-2xl flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
        <Button variant="outline" onClick={scrollToHome}>
        <FontAwesomeIcon icon={faCircleChevronUp} size="lg" className="mr-2" />
          Back to Top
        </Button>
        <Button variant="outline">
          <FontAwesomeIcon icon={faFingerprint} size="lg" className="mr-2" />Privacy Policy
        </Button>
        <Button variant="outline">
          <FontAwesomeIcon icon={faAsterisk} size="lg" className="mr-2" />Terms and Conditions
        </Button>
        <GitHubBtn variant="outline" />
      </footer>
      <p className="mb-4 w-full text-center text-xs">
        ©Focus Fox {year}. Code licensed under the{" "}
        <a
          href="https://github.com/marinoffDev/Focus-Fox/blob/main/LICENSE"
          target="_blank"
          className="underline"
        >
          CC BY-NC 4.0 License
        </a>
        .
      </p>
    </>
  );
}
