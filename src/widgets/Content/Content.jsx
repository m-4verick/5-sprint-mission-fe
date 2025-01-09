import OnSaleProductNav from "./OnSaleProduct/OnSaleProductNav";
import BestProduct from "./BestProducts/BestProduct";
import OnSaleProduct from "./OnSaleProduct/OnSaleProduct";
import { useState } from "react";
import PageClickButton from "./OnSaleProduct/PageClickButton";

export default function Content() {
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");
  const [ keyword, setKeyword ] = useState("");
  const [ isSelected, setIsSelected ] = useState(false);

  const handleOrderChange = (e) => setOrderBy(e.target.value);
  const handlePageChange = (e) => setPage(e.target.value);
  const handleKeyword = (e) => setKeyword(e.target.value);

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
        <OnSaleProduct page={page} orderBy={orderBy} keyword={keyword}/>
          <div className="mt-[40px] flex justify-center gap-1">

              {(() => {
                  const buttons = [];
                  for (let i = 1; i <= 5; i++) {
                      buttons.push(
                          <PageClickButton
                              key={i}
                              isSelected={Number(page) === Number(i)}
                              handlePageChange={handlePageChange}
                              value={i}
                          />,
                      );
                  }
                  return buttons;
              })()}
          </div>
      </div>
    </div>
  );
}