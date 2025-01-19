"use client";

import Logo from "@/widgets/Header/components/Logo";
import Button from "@/widgets/Header/components/Button";
import { useHeaderHandlers } from "@/widgets/Header/logic/hooks/handler";
import { usePathname } from "next/navigation";
import Tab from "@/widgets/Header/components/Tab";

export default function Header() {
  const { handleLogoClick, handleButtonClick } = useHeaderHandlers();
  const pathname = usePathname();

  return (
    <div className="fixed top-0 z-10 w-full border-b bg-white">
      <div className="mx-auto flex h-[70px] max-w-[1150px] items-center justify-between px-4">
        <div className="flex items-center gap-[15px] md:gap-[35px]">
          <Logo onClick={handleLogoClick} />
          {pathname !== "/" && <Tab />}
        </div>
        <Button onClick={handleButtonClick} />
      </div>
    </div>
  );
}
