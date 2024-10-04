import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/Focus-Fox/"
      className="flex items-center justify-center"
    >
      <img
        className="w-10"
        src="https://res.cloudinary.com/grffn/image/upload/v1716236444/Focus-Fox/logo.png"
        alt="Focus Fox Logo"
      />
      <p className="font-bold">Focus Fox</p>
    </Link>
  );
}
