import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ProductRow from "./components/ProductRow";
import HerroSwiper from "./components/ui/swiperCard/HerroSwiper";
import SwiperCard from "./components/ui/swiperCard/SwiperCard";
import PaymentHeader from "./components/ui/payment/PaymentHeader";
import PaymentFooter from "./components/ui/payment/PaymentFooter";
import HomePage from "./Pages/HomePage";
import ProductListPage from "./Pages/ProductListPage";
import ProductPage from "./Pages/ProductPage";
import ShoppingCard from "./components/ui/productDetials/ShoppingCard";
import FaildPayment from "./Pages/FaildPayment";
import OrderPage from "./Pages/OrderPage";
import SuccessPage from "./Pages/SuccessPage";

function App() {
  return (
    <>
      {/* <PaymentHeader />
      <SwiperCard />
      <ProductRow
        sectionName={"الأقسام"}
        discountPeriod={1}
        discountPercentage={40}
      />
      <HerroSwiper />
      <PaymentFooter /> */}
      {/* <HomePage /> */}
      {/* <ProductListPage /> */}
      {/* <ProductPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product-list" element={<ProductListPage />} />
          <Route path="product-detials" element={<ProductPage />} />
          <Route path="SuccessPayment" element={<SuccessPage />} />
          <Route path="FaildPayment" element={<FaildPayment />} />
          <Route path="order" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
