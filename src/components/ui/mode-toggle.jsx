import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/ui/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-muted">
          <Sun
            className={`h-[1.2rem] w-[1.2rem] transition-all ${
              theme === "light" || theme === "peachyHaze"
                ? "rotate-0 scale-100"  // Visible state
                : "-rotate-90 scale-0"  // Hidden/animated state
            }`}
          />
          <Moon
            className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
              theme === "dark" || theme === "polarNight"
                ? "rotate-0 scale-100"  // Visible state
                : "rotate-90 scale-0"   // Hidden/animated state
            }`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("peachyHaze")}>
          Peachy Haze
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("polarNight")}>
          Polar Night
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
