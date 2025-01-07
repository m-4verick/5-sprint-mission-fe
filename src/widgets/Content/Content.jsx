import BestProduct from './BestProduct/BestProduct';
import OnSaleProduct from './OnSaleProduct/OnSaleProduct';

export default function Content() {
    return (
        <div className="mt-[96px] max-w-[1200px] mx-auto">
            <div>
                <p className="text-[#111827] text-[20px] font-bold">베스트 상품</p>
                <div className="grid grid-cols-4 gap-[24px] h-[378px] mt-[16px]">
                    <BestProduct />
                </div>
            </div>

            <div className="mt-[40px]">
                <div className="flex justify-between">
                    <p className="text-[#111827] text-[20px] font-bold">판매 중인 상품</p>
                    <div className="flex gap-[12px]">
                        <input type="text" placeholder="검색할 상품을 입력해주세요"
                               className="bg-[#F3F4F6] rounded-lg pl-[16px] pr-[107px] py-[12px]"/>
                        <button className="bg-[#3692FF] px-[23px] py-[12px] rounded-lg text-white">상품 등록하기</button>
                        <select className="border px-[20px] py-[12px] rounded-lg">
                            <option>최신순</option>
                            <option>좋아요순</option>
                        </select>
                    </div>
                </div>
                <div className="h-[674px] grid grid-cols-5 gap-[24px] mt-[16px]">
                    <OnSaleProduct />
                </div>
                <div className="mt-[43px] flex justify-center gap-[4px]">
                    <button className="w-[40px] h-[40px] rounded-full border font-bold text-[#6B7280]">&lt;</button>
                    <button className="w-[40px] h-[40px] rounded-full font-bold text-white bg-[#2F80ED]">1</button>
                    <button className="w-[40px] h-[40px] rounded-full border font-bold text-[#6B7280] ">2</button>
                    <button className="w-[40px] h-[40px] rounded-full border font-bold text-[#6B7280] ">3</button>
                    <button className="w-[40px] h-[40px] rounded-full border font-bold text-[#6B7280] ">4</button>
                    <button className="w-[40px] h-[40px] rounded-full border font-bold text-[#6B7280]">5</button>
                    <button className="w-[40px] h-[40px] rounded-full border font-bold text-[#6B7280]">&gt;</button>
                </div>
            </div>
        </div>
    )
}