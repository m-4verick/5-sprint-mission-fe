import axios from "axios";
import { useEffect, useState } from "react";

export default function BestProduct({ page = 1, size, order }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchList() {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${size}&orderBy=${order}`,
        );
        setList(res.data.list);
        setLoading(false);
      } catch (err) {
        console.log("err: " + err);
      }
    }

    fetchList();
  }, [page, order]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <p>상품을 불러오는 중입니다...</p>
        </div>
      ) : (
        list.map((item) => (
          <div key={item.id} className="flex flex-col cursor-pointer">
            <img
              src={item.images}
              alt={item.name}
              className="rounded-lg object-cover aspect-square"
            />
            <p className="mt-4 text-sm">{item.name}</p>
            <p className="mt-1.5 text-base font-bold">
              {item.price.toLocaleString()}원
            </p>
            <p className="mt-1.5 text-xs">♡ {item.favoriteCount}</p>
          </div>
        ))
      )}
    </>
  );
}
