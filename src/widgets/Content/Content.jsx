import { useState, useMemo } from "react";
import OnSaleProductNav from "./OnSaleProduct/OnSaleProductNav";
import BestProduct from "./BestProducts/BestProduct";
import OnSaleProduct from "./OnSaleProduct/OnSaleProduct";
import PageClickButton from "./OnSaleProduct/PageClickButton";

export default function Content() {
    const [page, setPage] = useState(1);
    const [orderBy, setOrderBy] = useState("recent");
    const [keyword, setKeyword] = useState("");
    const [totalPage, setTotalPage] = useState(21);
    const itemsPerPage = 5;

    const totalGroups = useMemo(() => Math.ceil(totalPage / itemsPerPage), [totalPage, itemsPerPage]);
    const currentGroup = useMemo(() => Math.floor((page - 1) / itemsPerPage), [page, itemsPerPage]);
    const startPage = useMemo(() => currentGroup * itemsPerPage + 1, [currentGroup, itemsPerPage]);
    const endPage = useMemo(() => Math.min(startPage + itemsPerPage - 1, totalPage), [startPage, totalPage]);

    const handlePageChange = (pageNum) => setPage(pageNum);
    const handleOrderChange = (e) => setOrderBy(e.target.value);
    const handleKeyword = (e) => setKeyword(e.target.value);

    const handlePrevGroup = () => {
        if (currentGroup > 0) {
            setPage((currentGroup - 1) * itemsPerPage + 1);
        }
    };

    const handleNextGroup = () => {
        if (currentGroup < totalGroups - 1) {
            setPage((currentGroup + 1) * itemsPerPage + 1);
        }
    };

    return (
        <div className="mt-[17px] md:mt-[27px] max-w-[1200px] mx-auto px-[16px] md:px-[24px]">
            <BestProduct />
            <div className="mt-[24px] md:mt-[40px]">
                <OnSaleProductNav
                    orderBy={orderBy}
                    handleOrderChange={handleOrderChange}
                    handleKeyword={handleKeyword}
                    inputValue={keyword}
                />
                <OnSaleProduct
                    page={page}
                    orderBy={orderBy}
                    keyword={keyword}
                />
                <div className="mt-[40px] flex justify-center gap-1">
                    {totalGroups > 1 && (
                        <div className="flex items-center space-x-2">
                            {currentGroup > 0 && (
                                <button
                                    onClick={handlePrevGroup}
                                    className="w-[40px] h-[40px] border rounded-full"
                                >
                                    &lt;
                                </button>
                            )}

                            {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((i) => (
                                <PageClickButton
                                    key={i}
                                    isSelected={page === i}
                                    handlePageChange={() => handlePageChange(i)}
                                    value={i}
                                />
                            ))}

                            {currentGroup < totalGroups - 1 && (
                                <button
                                    onClick={handleNextGroup}
                                    className="w-[40px] h-[40px] border rounded-full"
                                >
                                    &gt;
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
