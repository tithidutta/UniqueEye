import ProductList from "@/components/ui/product/product-list";
import { ScreenLayout } from "@/components/layouts/screen-layout";

export default function ProductScreen() {
  return (
    <ScreenLayout header="All Products">
      <ProductList />
    </ScreenLayout>
  );
}
