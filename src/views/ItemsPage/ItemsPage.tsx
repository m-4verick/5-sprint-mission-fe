import SearchNav from "@/views/ItemsPage/components/SearchNav/SearchNav";
import ProductList from "@/views/ItemsPage/components/ProductList/ProductList";

export default function ItemsPage() {
  return (
    <div className="mx-auto max-w-[1150px] px-4">
      <SearchNav />
      <ProductList />
    </div>
  );
}
