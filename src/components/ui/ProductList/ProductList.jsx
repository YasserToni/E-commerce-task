import ProductListCard from "./ProductListCard";

function ProductList() {
  return Array.from({ length: 20 }).map((item, index) => (
    <ProductListCard key={index} />
  ));
}

export default ProductList;
