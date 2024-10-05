const year = new Date().getFullYear();

export default function FooterCopyright() {
  
  return (
    <p className="mb-4 w-full text-center text-xs">
    © {year} marinoffDev. Code licensed under the{" "}
    <a href="https://github.com/marinoffDev/Focus-Fox/blob/main/LICENSE" target="_blank" className="underline" >
      CC BY-NC 4.0 License
    </a>
    .
    </p>
  )
}