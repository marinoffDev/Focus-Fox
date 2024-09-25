import { Button } from "@/components/ui/button";
import GitHubBtn from "@/components/ui/GitHubBtn";

const year = new Date().getFullYear();

export default function Footer({ scrollToHome }) {
  return (
    <>
      <footer className="relative m-4 pt-4 mx-auto flex max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Button variant="outline" onClick={scrollToHome}>
          Back To Top
        </Button>
        <Button variant="outline">Privacy Policy</Button>
        <Button variant="outline">Terms and Conditions</Button>
        <GitHubBtn variant="secondary" />
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
