import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Categories from "../../categories/Categories";
import ProductCard from "../../productCard/ProductCard";

const CategoryProducts = () => {
  const { name } = useParams();
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${name}`)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);
  if (products.length === 0) return <div>...Loading</div>;
  return <ProductCard products={products} />;
};

export default CategoryProducts;
