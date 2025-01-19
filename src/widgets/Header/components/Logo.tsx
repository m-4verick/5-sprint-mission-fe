import Image from "next/image";
import logo from "@/assets/images/header/logo.png";
import title from "@/assets/images/header/title.png";

interface LogoProps {
  onClick?: () => void;
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <div onClick={onClick} className="flex cursor-pointer items-center gap-2">
      <Image src={logo} alt="logo" className="hidden md:block" />
      <Image src={title} alt="title" />
    </div>
  );
}
