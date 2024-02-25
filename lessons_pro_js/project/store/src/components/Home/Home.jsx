import React from "react";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import { useSelector } from "react-redux";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";

import { categoriesSelect } from "../../features/categories/selectors";
import { productSelect } from "../../features/products/selectors";

const Home = () => {
  const categories = useSelector(categoriesSelect);
  const products = useSelector(productSelect);

  return (
    <>
      <Poster />
      <Products products={products} amound={5} title="Treading" />
      <Categories categories={categories} amound={5} title="Worth seeing" />
      <Banner />
      <Products products={products} amound={5} title="Less then 100$" />
    </>
  );
};

export default Home;
