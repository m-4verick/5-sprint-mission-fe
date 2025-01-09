import ProductList from "../ProductList/ProductList";
import { useWindowWidth } from "../../../shared/hooks/useWindowWidth";

export default function BestProduct({ page = "1", orderBy = "favorite" }) {
    const windowWidth = useWindowWidth();

    const getPageSize = () => {
        if (windowWidth === "mobile") return 1;
        if (windowWidth === "tablet") return 2;
        return 4;
    };

    return (
        <div>
            <p className="font-bold text-[20px]">베스트 상품</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-[10px] xl:gap-[24px] mt-[16px]">
                <ProductList
                    page={page}
                    pageSize={getPageSize()}
                    orderBy={orderBy}
                />
            </div>
        </div>
    );
}
