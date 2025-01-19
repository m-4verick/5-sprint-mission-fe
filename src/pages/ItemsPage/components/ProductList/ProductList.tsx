"use client";
import mockImage from "@/assets/images/items/mockImage.png";
import Image from "next/image";
import useProducts from "@/pages/ItemsPage/components/ProductList/logic/hooks/useProducts";
import { useEffect } from "react";

export default function ProductList() {
  const { products, loading, error, fetchMore, hasMore } = useProducts();

  const handleScroll = () => {
    const bottom =
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight;
    if (bottom && !loading && hasMore) {
      fetchMore();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, hasMore]);

  if (loading && products.length === 0)
    return (
      <div className="my-5 flex h-screen justify-center pt-20 text-2xl font-bold">
        <p>하이 나 판다 로딩중이라구!</p>
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="mb-[160px] mt-8 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 xl:grid-cols-5 xl:gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex cursor-pointer flex-col justify-center"
          >
            <Image
              src={mockImage}
              alt="product image"
              className="w-full transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <p className="mt-4 text-[14px]">{product["name"]}</p>
            <p className="mt-1.5 font-bold">
              {product["price"].toLocaleString()}원
            </p>
          </div>
        ))}
      </div>

      {loading && (
        <div className="my-5 flex items-start justify-center text-2xl font-bold">
          <p>로딩 중...</p>
        </div>
      )}
      {!hasMore && (
        <div className="my-5 flex justify-center text-2xl font-bold">
          <p>더 이상 제품이 없다판다.</p>
        </div>
      )}
    </>
  );
}
