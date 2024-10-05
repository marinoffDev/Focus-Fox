import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import FooterCopyright from "./FooterCopyright";
import { useNavigate } from "react-router-dom";

export default function LegalPageLayout({navigateToRoute, navigateToRouteLabel, pageTitle, effectiveDateText, children}) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-between p-4 relative mx-auto max-w-3xl">
        <Logo />
        <div>
        <Button onClick={() => navigate(navigateToRoute)} variant="ghost">
          {navigateToRouteLabel}
        </Button>
        <Button onClick={() => navigate("/Focus-Fox/")} variant="ghost">
            Go Back Home
        </Button>
        </div>
      </div>
      <Separator className="m-auto block max-w-3xl" />
      <div className="flex flex-col items-center justify-center m-auto py-4 max-w-3xl text-justify">
        <div className="mb-10 pt-4 font-semibold text-muted-foreground">
          <div className="flex flex-col justify-center items-center pb-2">
            <h1 className="text-4xl font-bold">{pageTitle}</h1>
          </div>
          <p className="py-2">Effective date: {effectiveDateText}</p>
          {children}
        </div>
        <Separator className="m-auto block max-w-3xl" />
      </div>
      <FooterCopyright />
    </>
  );
}