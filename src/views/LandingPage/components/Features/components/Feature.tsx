import Image from "next/image";
import { StaticImageData } from "next/image";

interface FeatureProps {
  image: StaticImageData;
  label: string;
  title: string;
  description: string;
  reverse: boolean;
}

export default function Feature({
  image,
  label,
  title,
  description,
  reverse,
}: FeatureProps) {
  return (
    <div
      className={`mt-[50px] flex flex-col xl:flex-row ${reverse ? "xl:flex-row-reverse" : ""} xl:gap-[64px] xl:py-[130px]`}
    >
      <Image src={image} alt="feature image" className="w-full" />
      <div
        className={`flex flex-col ${reverse ? "items-end" : "items-start"} xl:justify-center`}
      >
        <p className="mt-[24px] font-bold text-[#3692FF] md:text-[18px]">
          {label}
        </p>
        <p
          className={`mt-2 break-keep text-[24px] font-bold text-[#374151] md:text-[32px] ${reverse ? "text-right" : ""}`}
        >
          {title}
        </p>
        <p
          className={`mt-4 break-keep text-[#374151] md:text-[18px] ${reverse ? "text-right" : ""}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
