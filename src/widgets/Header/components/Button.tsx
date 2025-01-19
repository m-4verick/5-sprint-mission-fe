import Image from "next/image";
import avatar from "@/assets/images/header/avatar.png";

interface ButtonProps {
  onClick?: () => void;
}

export default function Button({ onClick }: ButtonProps) {
  return (
    <div>
      <button
        onClick={onClick}
        className="hidden rounded-lg bg-[#3692FF] px-11 py-2.5 font-bold text-white md:block"
      >
        로그인
      </button>
      <Image
        onClick={onClick}
        src={avatar}
        alt="avatar"
        className="block md:hidden"
      />
    </div>
  );
}
