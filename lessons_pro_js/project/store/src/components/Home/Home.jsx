import React from "react";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import { useSelector } from "react-redux";
import Categories from "../Categories/Categories";

const Home = () => {
  const categories = useSelector(({ categories }) => categories.list);
  const products = useSelector(({ products }) => products.list);
  return (
    <>
      <Poster />
      <Products products={products} amound={5} title="Treading" />
      <Categories categories={categories} amound={5} title="Worth seeing" />
    </>
  );
};

export default Home;
