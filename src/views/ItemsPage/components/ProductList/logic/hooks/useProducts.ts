import { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  _id: string;
  name: string;
  price: number;
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10;

  const fetchProducts = async (page: number) => {
    setLoading(true);
    const offset = (page - 1) * limit;
    try {
      const res = await axios.get(
        `https://five-sprint-mission-be-3j7s.onrender.com?offset=${offset}&limit=${limit}`,
      );
      if (res.data.products.length > 0) {
        setProducts((prevProducts) => [...prevProducts, ...res.data.products]);
      } else {
        setHasMore(false);
      }
    } catch (err: any) {
      setError("상품 목록을 가져오는 데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const fetchMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return { products, loading, error, fetchMore, hasMore };
};

export default useProducts;
