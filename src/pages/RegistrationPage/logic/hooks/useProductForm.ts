import { useState } from "react";
import { createProduct } from "../apis/uploadProduct";
import { useRouter } from "next/navigation";

export const useProductForm = () => {
  const router = useRouter();
  const [value, setValue] = useState({
    name: "",
    description: "",
    price: "",
    tags: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    console.log(value);
  };

  const handleSubmit = async () => {
    try {
      await createProduct(value);
      router.push("/items");
    } catch (error) {
      console.error("상품 등록 실패:", error);
    }
  };

  return { value, handleChange, handleSubmit };
};
