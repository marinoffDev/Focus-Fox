import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function GitHubBtn({ variant }) {
  return (
    <a href="https://github.com/marinoffDev/Focus-Fox/" target="_blank">
      <Button variant={variant}>
        <FontAwesomeIcon icon={faGithub} size="xl" className="mr-2" />Star on GitHub
      </Button>
    </a>
  );
}
