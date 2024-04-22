import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slice";
import { basketSlice } from "./basket";


export const store = configureStore({
  reducer: {
    product: productSlice.reducer ,
    basket:basketSlice.reducer
  }
});
