import ProductList from "../ProductList/ProductList";
import { useWindowWidth } from "../../../shared/hooks/useWindowWidth";

export default function BestProduct({ page = "1", orderBy = "favorite" }) {
  const windowWidth = useWindowWidth();

  return (
    <div>
      <p className="font-bold text-[20px]">베스트 상품</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-[10px] xl:gap-[24px] mt-[16px]">
        {windowWidth === "mobile" && (
          <ProductList page="1" pageSize="1" orderBy="favorite" />
        )}
        {windowWidth === "tablet" && (
          <ProductList page="1" pageSize="2" orderBy="favorite" />
        )}
        {windowWidth === "desktop" && (
          <ProductList page="1" pageSize="4" orderBy="favorite" />
        )}
      </div>
    </div>
  );
}
