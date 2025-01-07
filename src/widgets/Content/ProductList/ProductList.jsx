import axios from 'axios';
import {useEffect, useState} from 'react';

export default function BestProduct({ page = 1, size, order}) {
    const [list, setList] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        async function fetchList() {
            try {
                setLoading(true)
                const res = await axios.get(`https://panda-market-api.vercel.app/products?page=${page}&pageSize=${size}&orderBy=${order}`)
                setList(res.data.list)
                setLoading(false)
            } catch (err) {
                console.log('err: ' + err);
            }
        }
        fetchList()
    }, [page, order])

    return (
        <>
            {list.map((item) => (
                <div key={item.id} className="flex flex-col cursor-pointer">
                    <img src={item.images} className="rounded-lg object-cover aspect-square"/>
                    <p className="mt-[16px] text-[14px] ">{item.name}</p>
                    <p className="mt-[6px] text-[16px] font-bold">{item.price}</p>
                    <p className="mt-[6px] text-[12px]">♡ {item.favoriteCount}</p>
                </div>
            ))}
        </>
    )
}