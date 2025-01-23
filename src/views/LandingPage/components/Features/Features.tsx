import featureOne from "@/assets/images/landing/featureOne.png";
import featureTwo from "@/assets/images/landing/featureTwo.png";
import featureThree from "@/assets/images/landing/featureThree.png";
import Feature from "@/views/LandingPage/components/Features/components/Feature";

const featureData = [
  {
    image: featureOne,
    label: "Hot Item",
    title: "인기 상품을 확인해보세요",
    description: "가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요",
    reverse: false,
  },
  {
    image: featureTwo,
    label: "Search",
    title: "구매를 원하는 상품을 검색하세요",
    description: "구매하고 싶은 물품은 검색해서 쉽게 찾아보세요",
    reverse: true,
  },
  {
    image: featureThree,
    label: "Register",
    title: "판매를 원하는 상품을 등록하세요",
    description: "어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요",
    reverse: false,
  },
];

export default function Features() {
  return (
    <div className="mx-auto max-w-[980px] px-4">
      {featureData.map((feature, index) => (
        <Feature
          key={index}
          image={feature.image}
          label={feature.label}
          title={feature.title}
          description={feature.description}
          reverse={feature.reverse}
        />
      ))}
    </div>
  );
}
