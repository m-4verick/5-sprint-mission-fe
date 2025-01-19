import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tab() {
  const pathname = usePathname();

  return (
    <span className="flex gap-[20px] text-[18px] font-bold text-[#4B5563] md:gap-[30px]">
      <Link
        href="/community"
        className={`${pathname === "/community" ? "text-[#3692FF]" : null}`}
      >
        자유게시판
      </Link>
      <Link
        href="/items"
        className={`${pathname === "/items" ? "text-[#3692FF]" : null}`}
      >
        중고마켓
      </Link>
    </span>
  );
}
