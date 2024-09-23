import { Button } from "@/components/ui/button";
import GitHubBtn from "@/components/ui/GitHubBtn";

const year = new Date().getFullYear();

export default function Footer({ scrollToHome }) {
  return (
    <>
      <footer className="relative m-4 mx-auto flex max-w-2xl items-center justify-center space-x-4">
        <Button variant="outline" onClick={scrollToHome}>
          Home
        </Button>
        <Button variant="outline">Privacy Policy</Button>
        <Button variant="outline">Terms and Conditions</Button>
        <GitHubBtn variant="secondary" />
        <div className="p-4 pt-2"></div>
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
