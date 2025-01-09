import axios from "axios";
import {useState, useEffect} from "react";

export default function ProductList({page, pageSize, orderBy, keyword = "" }) {
    const [list, setList] = useState([]);
    const imgDefault = `https://placehold.co/600x400/png?text=NO+IMAGE`;

    const handleError = (e) => {
        if (e.target.src === imgDefault) return;
        e.target.onerror = null;
        e.target.src = imgDefault;
    };

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(
                `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
            );
            setList(res.data.list);
        }

        fetchData();
    }, [page, orderBy, keyword]);


    return (
        <>
            {list.map((item) => (
                <div key={item.id} className="cursor-pointer">
                    <div className="rounded-xl overflow-hidden">
                        <img
                            src={item.images?.[0] || imgDefault}
                            onError={handleError}
                            alt={item.name || "Product Image"}
                            className="object-cover aspect-square w-full transform transition-transform duration-300 ease-out hover:scale-105"
                        />
                    </div>
                    <p className="text-[14px] mt-[16px]">{item.name}</p>
                    <p className="text-[16px] font-bold mt-[6px]">{item.price}원</p>
                    <p className="text-[12px] mt-[6px]">♡ {item.favoriteCount}</p>
                </div>
            ))}
        </>
    );
}
