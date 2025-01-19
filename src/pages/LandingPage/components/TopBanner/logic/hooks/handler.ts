import { useRouter } from "next/navigation";

export const useTopBannerHandlers = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/items");
  };

  return { handleButtonClick };
};
