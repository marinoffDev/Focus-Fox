import { Button } from "@/components/ui/button";
import GitHubBtn from "@/components/ui/GitHubBtn";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <>
      <footer className='relative mx-auto flex justify-center items-center space-x-4 m-4 max-w-2xl'>
        <a href="/Focus-Fox/" target="_self">
          <Button variant="outline">Home</Button>
        </a>
        <Button variant="outline">Privacy Policy</Button>
        <Button variant="outline">Terms and Conditions</Button>
        <GitHubBtn variant="secondary" />
      </footer>
      <p className="text-xs w-full text-center mb-4" >©Focus Fox {year}. Code licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank" className="underline">MIT License</a>.</p>
    </>
  )
}