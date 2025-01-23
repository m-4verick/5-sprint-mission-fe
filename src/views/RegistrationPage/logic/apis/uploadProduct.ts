import axios from "axios";

export const createProduct = async (productData: {
  name: string;
  description: string;
  price: string;
  tags: string;
}) => {
  const res = await axios.post(
    "https://five-sprint-mission-be-3j7s.onrender.com",
    productData,
  );
  return res.data;
};
