import ProductList from "../ProductList/ProductList";
import { useWindowWidth } from "../../../shared/hooks/useWindowWidth";

export default function OnSaleProduct({ page = 1, orderBy = "recent", keyword }) {
    const windowWidth = useWindowWidth();

    const getPageSize = () => {
        switch (windowWidth) {
            case "mobile":
                return 4;
            case "tablet":
                return 6;
            case "desktop":
                return 10;
            default:
                return 4;
        }
    };

    const pageSize = getPageSize();

    return (
        <div className="grid grid-cols-2 gap-x-[8px] gap-y-[32px] md:grid-cols-3 md:gap-x-[16px] md:gap-y-[40px] xl:grid-cols-5 xl:gap-x-[24px] pt-[16px] md:pt-[24px]">
            <ProductList page={page} pageSize={pageSize} orderBy={orderBy} keyword={keyword} />
        </div>
    );
}
