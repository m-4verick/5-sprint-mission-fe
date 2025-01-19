import SearchNav from "@/pages/ItemsPage/components/SearchNav/SearchNav";
import ProductList from "@/pages/ItemsPage/components/ProductList/ProductList";

export default function ItemsPage() {
  return (
    <div className="mx-auto max-w-[1150px] px-4">
      <SearchNav />
      <ProductList />
    </div>
  );
}
