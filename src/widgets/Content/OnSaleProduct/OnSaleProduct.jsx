import ProductList from "../ProductList/ProductList";
import { useWindowWidth} from "../../../shared/hooks/useWindowWidth";


export default function OnSaleProduct({page = 1, orderBy = "recent", keyword}) {
    const windowWidth = useWindowWidth();

    return (
        <div
            className="grid grid-cols-2 gap-x-[8px] gap-y-[32px] md:grid-cols-3 md:gap-x-[16px] md:gap-y-[40px] xl:grid-cols-5 xl:gap-x-[24px] pt-[16px] md:pt-[24px]">
            {windowWidth === "mobile" && <ProductList page={page} pageSize="4" orderBy={orderBy} keyword={keyword}/>}
            {windowWidth === "tablet" && <ProductList page={page} pageSize="6" orderBy={orderBy} keyword={keyword}/>}
            {windowWidth === "desktop" && <ProductList page={page} pageSize="10" orderBy={orderBy} keyword={keyword}/>}
        </div>
    )
}