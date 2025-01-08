import axios from "axios";
import { useState, useEffect } from "react";

export default function ProductList({ page, pageSize, orderBy }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`,
      );
      setList(res.data.list);
    }

    fetchData();
  }, [page, orderBy]);

  return (
    <>
      {list.map((item) => (
        <div key={item.id} className="cursor-pointer">
          <img
            src={item.images}
            alt="이미지"
            className="rounded-xl object-cover aspect-square w-full"
          />
          <p className="text-[14px] mt-[16px]">{item.name}</p>
          <p className="text-[16px] font-bold mt-[6px]">{item.price}</p>
          <p className="text-[12px] mt-[6px]">♡ {item.favoriteCount}</p>
        </div>
      ))}
    </>
  );
}
