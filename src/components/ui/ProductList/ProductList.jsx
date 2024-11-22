import CardsDiscount from "../CardDiscount/CardsDiscount";

function ProductList() {
  return Array.from({ length: 20 }).map((item, index) => (
    <CardsDiscount key={index} />
  ));
}

export default ProductList;
