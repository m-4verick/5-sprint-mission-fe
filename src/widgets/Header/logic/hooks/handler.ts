import { useRouter } from "next/navigation";

export const useHeaderHandlers = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleButtonClick = () => {
    router.push("/login");
  };

  return { handleLogoClick, handleButtonClick };
};
