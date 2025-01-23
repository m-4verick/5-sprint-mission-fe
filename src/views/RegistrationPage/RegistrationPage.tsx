"use client";
import InputSet from "@/views/RegistrationPage/components/InputSet";
import { useProductForm } from "@/views/RegistrationPage/logic/hooks/useProductForm";
import { useState } from "react";

export default function RegistrationPage() {
  const { value, handleChange, handleSubmit } = useProductForm();
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="mx-auto mb-[160px] mt-[26px] max-w-[1150px] px-4 text-[#1F2937]">
      <div className="flex items-center justify-between font-bold">
        <p className="text-xl">상품 등록하기</p>
        <button
          onClick={handleSubmit}
          disabled={isDisabled}
          className={`rounded-lg ${isDisabled ? "bg-[#9CA3AF]" : "bg-[#3692FF]"} px-6 py-2 font-bold text-white`}
        >
          등록
        </button>
      </div>
      <div className="flex flex-col text-[18px]">
        <InputSet
          onChange={handleChange}
          value={value.name}
          name="name"
          label="상품명"
          placeholder="상품명을 입력해주세요"
        />
        <label className="mt-6 text-[18px] font-bold">상품 소개</label>
        <textarea
          value={value.description}
          onChange={handleChange}
          name="description"
          placeholder="상품 설명을 입력해주세요"
          className="mt-4 h-[280px] rounded-xl bg-[#F3F4F6] px-6 py-4"
        />
        <InputSet
          onChange={handleChange}
          value={value.price}
          name="price"
          label="판매가격"
          placeholder="판매가격을 입력해주세요"
        />
        <InputSet
          value={value.tags}
          onChange={handleChange}
          name="tags"
          label="태그"
          placeholder="태그를 입력해주세요"
        />
      </div>
    </div>
  );
}
