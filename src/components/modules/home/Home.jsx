import React, { useEffect, useState } from "react";
import Hero from "../../hero/Hero";
import ProductCard from "../../productCard/ProductCard";
import FeatureCard from "../../featureCard/FeatureCard";
import Card from "../../card/Card";
import Categories from "../../categories/Categories";

const Home = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);
  return (
    <>
      <Hero />
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-pink-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>...loading</div>
      )}

      <ProductCard />
      <FeatureCard />
      <Card />
    </>
  );
};

export default Home;
