import React from "react";
import Header from "./components/header/Header";
import Home from "./components/modules/home/Home";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./components/modules/singleProduct/SingleProduct";
import Products from "./components/modules/products/Products";
import CategoryProducts from "./components/modules/categoryProducts/CategoryProducts";
import Cart from "./components/modules/cart/Cart";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <div className="h-screen flex items-center text-7xl">
              Error 404 Not Found
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
