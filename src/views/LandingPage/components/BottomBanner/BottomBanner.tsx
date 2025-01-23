import bottomBanner from "@/assets/images/landing/bottomBanner.png";
import Image from "next/image";

export default function BottomBanner() {
  return (
    <div className="bg-[#CFE5FF]">
      <div className="mx-auto mt-[80px] max-w-[1150px] xl:flex">
        <div className="whitespace-nowrap pt-[120px] text-center text-[32px] font-bold text-[#374151] xl:mt-[100px] xl:text-left xl:text-[40px]">
          <p>믿을 수 있는</p>
          <p>판다마켓 중고 거래</p>
        </div>
        <Image
          src={bottomBanner}
          alt="bottom banner"
          className="mt-[130px] w-full"
        />
      </div>
    </div>
  );
}
