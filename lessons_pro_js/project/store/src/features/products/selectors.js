import { createSelector } from "@reduxjs/toolkit";

const getProductsSlice = (state) => state.products;

export const productSelect = createSelector(
  getProductsSlice,
  (data) => data.list
);
