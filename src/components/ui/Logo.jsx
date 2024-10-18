import { Link } from "react-router-dom";
import { useTheme } from "@/components/ui/theme-provider";

export default function Logo() {
  const { theme } = useTheme();

  const logoSrcMap = {
    light: "https://res.cloudinary.com/grffn/image/upload/v1716236444/Focus-Fox/logo.png",
    dark: "https://res.cloudinary.com/grffn/image/upload/v1716236444/Focus-Fox/logo.png",
    polarNight: "https://res.cloudinary.com/grffn/image/upload/v1729211486/Focus-Fox/logo-polar-night.png",
    peachyHaze: "https://res.cloudinary.com/grffn/image/upload/v1729204434/Focus-Fox/logo-peachy-haze.png",
  };

  const logoSrc = logoSrcMap[theme] || logoSrcMap.dark;

  return (
    <Link
      to="/Focus-Fox/"
      className="flex items-center justify-center"
    >
      <img
        className="w-10"
        src={logoSrc}
        alt="Focus Fox Logo"
      />
      <p className="font-bold">Focus Fox</p>
    </Link>
  );
}
