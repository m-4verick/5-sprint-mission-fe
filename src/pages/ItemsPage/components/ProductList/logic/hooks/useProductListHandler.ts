import { useRouter } from "next/navigation";

export const useProductListHandler = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/registration");
  };

  return { handleButtonClick };
};
