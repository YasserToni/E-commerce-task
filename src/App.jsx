import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/HomePage";
import ProductListPage from "./Pages/ProductListPage";
import ProductPage from "./Pages/ProductPage";
import FaildPayment from "./Pages/FaildPayment";
import OrderPage from "./Pages/OrderPage";
import SuccessPage from "./Pages/SuccessPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="products" element={<ProductListPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="checkout/success-order" element={<SuccessPage />} />
          <Route path="failed-order" element={<FaildPayment />} />
          <Route path="checkout" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
