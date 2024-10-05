import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-background text-foreground">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4 text-lg">{`Sorry, the page you're looking for doesn't exist.`}</p>
        <Button onClick={() => navigate("/Focus-Fox/")} className="mt-6">
          Go Back Home
        </Button>
      </div>
  );
}