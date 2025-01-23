"use client";

import Image from "next/image";
import topBanner from "@/assets/images/landing/topBanner.png";
import { useTopBannerHandlers } from "@/views/LandingPage/components/TopBanner/logic/hooks/handler";

export default function TopBanner() {
  const { handleButtonClick } = useTopBannerHandlers();

  return (
    <div className="w-full bg-[#CFE5FF]">
      <div className="mx-auto flex max-w-[1150px] flex-col xl:flex-row xl:pt-[200px]">
        <div className="flex flex-col items-center xl:items-start xl:justify-start">
          <div className="mt-[48px] flex flex-col items-center text-[32px] font-bold text-[#374151] md:flex-row md:gap-2 xl:flex-col xl:items-start xl:gap-0 xl:text-[40px]">
            <p>일상의 모든 물건을 </p>
            <p>거래해보세요</p>
          </div>
          <button
            onClick={handleButtonClick}
            className="mt-[18px] whitespace-nowrap rounded-3xl bg-[#3692FF] px-[70px] py-[10px] font-bold text-white md:mt-[24px] md:px-[120px] md:py-[12px]"
          >
            구경하러 가기
          </button>
        </div>
        <Image
          src={topBanner}
          alt="top banner image"
          className="mt-[130px] w-full md:mt-[210px] xl:mt-0"
        />
      </div>
    </div>
  );
}
