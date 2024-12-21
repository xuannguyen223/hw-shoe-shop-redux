import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Reducer/productReducer";
import cartReducer from "./Reducer/cartReducer";

export const store = configureStore({
  reducer: {
    productReducer: productReducer,
    cartReducer: cartReducer,
  },
});
