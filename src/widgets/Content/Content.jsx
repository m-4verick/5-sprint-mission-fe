import OnSaleProductNav from "./OnSaleProduct/OnSaleProductNav";
import OnSaleProductPagingButtons from "./OnSaleProduct/OnSaleProductPagingButtons";
import BestProduct from "./BestProducts/BestProduct";
import OnSaleProduct from "./OnSaleProduct/OnSaleProduct";
import { useState } from "react";

export default function Content() {
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");

  const totalPages = 5;

  const handleOrderChange = (e) => setOrderBy(e.target.value);
  const handlePageChange = (e) => setPage(e.target.value);

  return (
    <div className="mt-[87px] md:mt-[97px] max-w-[1200px] mx-auto px-[16px] md:px-[24px]">
      <BestProduct />
        <div className="mt-[24px] md:mt-[40px]">
            <OnSaleProductNav
                orderBy={orderBy}
                handleOrderChange={handleOrderChange}
            />
            <OnSaleProduct page={page} orderBy={orderBy}/>

        </div>
    </div>
  );
}