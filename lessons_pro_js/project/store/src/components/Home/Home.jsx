import React, { useEffect } from "react";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import { filterByPrice } from "../../features/products/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  //  const categories = useSelector(({ categories }) => categories.list);
  //  const products = useSelector(({ products }) => products.list);
  const {
    products: { list, filtered },
    categories,
  } = useSelector((state) => state);

  useEffect(() => {
    if (!list.length) return;

    dispatch(filterByPrice(100));
  }, [dispatch, list.length]);
  return (
    <>
      <Poster />
      <Products products={list} amound={5} title="Treading" />
      <Categories
        categories={categories.list}
        amound={5}
        title="Worth seeing"
      />
      <Banner />
      <Products products={filtered} amound={5} title="Less then 100$" />
    </>
  );
};

export default Home;
