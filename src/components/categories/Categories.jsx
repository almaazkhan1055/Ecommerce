import React, { useEffect, useState } from "react";
import FeatureCard from "../featureCard/FeatureCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  if (categories.length === 0) return <div>...Loading</div>;
  return (
    <>
      <FeatureCard cards={categories} />
    </>
  );
};

export default Categories;
