import ProductListCard from "./ProductListCard";
// import SkeletonCard from "../LoadingCard.jsx/SkeletonCard";

function ProductList() {
  return Array.from({ length: 20 }).map((item, index) => (
    <ProductListCard key={index} />
    // <SkeletonCard key={index} />
  ));
}

export default ProductList;
