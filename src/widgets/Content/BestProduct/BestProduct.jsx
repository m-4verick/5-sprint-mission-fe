import axios from 'axios';
import {useEffect, useState} from 'react';

export default function BestProduct() {
    const [list, setList] = useState([])

    useEffect(() => {
        async function fetchList() {
            try {
                const res = await axios.get('https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite')
                setList(res.data.list)
            } catch (err) {
                console.log('err: ' + err);
            }
        }
        fetchList()
    }, [])

    return (
        <>
            {list.map((item) => (
                <div key={item.id} className="flex flex-col cursor-pointer">
                    <img src={item.images} className="rounded-lg w-[282px] h-[282px] object-cover"/>
                    <p className="mt-[16px] text-[14px] ">{item.name}</p>
                    <p className="mt-[6px] text-[16px] font-bold">{item.price}</p>
                    <p className="mt-[6px] text-[12px]">♡ {item.favoriteCount}</p>
                </div>
            ))}
        </>
    )
}