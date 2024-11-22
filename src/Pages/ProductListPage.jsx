import CardsDiscount from "../components/ui/CardDiscount/CardsDiscount";
import Footer from "../components/ui/footer/Footer";
import Header from "../components/ui/header/Header";
import HeaderProductList from "../components/ui/ProductList/HeaderProductList";
import Navbar from "../components/ui/ProductList/Navbar";
import Pagination from "../components/ui/ProductList/Pagination";
import ProductList from "../components/ui/ProductList/ProductList";
import SideBar from "../components/ui/ProductList/SideBar";

function ProductListPage() {
  return (
    <>
      <Header />
      <HeaderProductList />
      <main dir="rtl" className="px-14 flex gap-5 py-6">
        <SideBar />
        <div className="w-full">
          <Navbar />
          <div className="flex flex-wrap gap-9">
            <ProductList />
          </div>
        </div>
      </main>
      <Pagination />
      <Footer />
    </>
  );
}

export default ProductListPage;
