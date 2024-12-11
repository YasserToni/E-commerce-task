import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/HomePage";
import ProductListPage from "./Pages/ProductListPage";
import ProductPage from "./Pages/ProductPage";
import FaildPayment from "./Pages/FaildPayment";
import OrderPage from "./Pages/OrderPage";
import SuccessPage from "./Pages/SuccessPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactusPage from "./Pages/ContactusPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="products" element={<ProductListPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="success-order" element={<SuccessPage />} />
          <Route path="failed-order" element={<FaildPayment />} />
          <Route path="checkout" element={<OrderPage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="contactus" element={<ContactusPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
