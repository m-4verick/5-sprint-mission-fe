import ProductList from './ProductList/ProductList';
import {useState} from 'react';

export default function Content() {
    const [order, setOrder] = useState("recent")
    const [paging, setPaging] = useState(1)

    const handleOrderChange = (e) => setOrder(e.target.value)

    const handlePageChange = (e) => setPaging(e.target.value)


    return (
        <div className="mt-[96px] max-w-[1200px] mx-auto">
            <div>
                <p className="text-[#111827] text-[20px] font-bold">베스트 상품</p>
                <div className="grid grid-cols-4 gap-[24px] h-[378px] mt-[16px]">
                    <ProductList order="favorite" size="4"/>
                </div>
            </div>

            <div className="mt-[40px]">
                <div className="flex justify-between">
                    <p className="text-[#111827] text-[20px] font-bold">판매 중인 상품</p>
                    <div className="flex gap-[12px]">
                        <input type="text" placeholder="검색할 상품을 입력해주세요"
                               className="bg-[#F3F4F6] rounded-lg pl-[16px] pr-[107px] py-[12px]"/>
                        <button className="bg-[#3692FF] px-[23px] py-[12px] rounded-lg text-white">상품 등록하기</button>
                        <select onChange={handleOrderChange} value={order}
                                className="border px-[20px] py-[12px] rounded-lg">
                            <option value="recent">최신순</option>
                            <option value="favorite">좋아요순</option>
                        </select>
                    </div>
                </div>
                <div className="h-[674px] grid grid-cols-5 gap-[24px] mt-[24px]">
                    <ProductList size="10" page={paging} order={order}/>
                </div>
                <div className="mt-[43px] flex justify-center gap-[4px]">
                    <button onClick={() => { setPaging( paging - 1)}} className="w-[40px] h-[40px] rounded-full border font-bold">&lt;</button>

                    {(() => {
                        const buttons = [];
                        for (let i = 1; i <= 5; i++) {
                            buttons.push(
                                <PageClickButton
                                    key={i}
                                    isSelected={Number(paging) === Number(i)}
                                    handlePageChange={handlePageChange}
                                    value={i}
                                />
                            );
                        }
                        return buttons;
                    })()}


                    <button onClick={() => { setPaging(paging + 1)}} className="w-[40px] h-[40px] rounded-full border font-bold">&gt;</button>
                </div>
            </div>
        </div>
    )
}
const PageClickButton = ({handlePageChange, value, isSelected}) => {
    if (isSelected) {
        return <button onClick={() => {
        }} value={value}
                       className="w-[40px] h-[40px] rounded-full border font-bold bg-[#2F80ED] text-white ">{value}</button>
    }

    return (

        <button onClick={handlePageChange} value={value}
                className="w-[40px] h-[40px] rounded-full border font-bold">{value}</button>
    )
}