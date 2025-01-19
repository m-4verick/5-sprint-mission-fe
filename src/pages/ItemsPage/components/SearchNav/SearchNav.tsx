"use client";
import Image from "next/image";
import zoom from "@/assets/images/items/zoom.png";
import { useProductListHandler } from "@/pages/ItemsPage/components/ProductList/logic/hooks/useProductListHandler";

export default function SearchNav() {
  const { handleButtonClick } = useProductListHandler();

  return (
    <div className="mt-4 flex flex-col gap-3 md:gap-4">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold text-[#111827]">판매중인 상품</p>
        <button
          onClick={handleButtonClick}
          className="whitespace-nowrap rounded-xl bg-[#3692FF] px-6 py-2 font-bold text-white"
        >
          상품 등록하기
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-grow">
          <Image
            src={zoom}
            alt="search icon"
            className="absolute left-4 top-3"
          />
          <input
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            className="w-full rounded-lg bg-[#F3F4F6] py-2 pl-11"
          />
        </div>
        <select className="w-auto rounded-lg border bg-[#E5E7EB] px-5 py-2">
          <option>최신순</option>
          <option>인기순</option>
        </select>
      </div>
    </div>
  );
}
