import { useEffect, useState } from "react";
import ProductCard from "../../../components/productCard/ProductCard";
import Categories from "../../categories/Categories";

const Products = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);
  return (
    <>
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-pink-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          ALL PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>...Loading</div>
      )}
    </>
  );
};

export default Products;
