// rxslice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProduct: null,
  isPopupVisible: false,
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    showProductDetails(state, action) {
      state.selectedProduct = action.payload;
      state.isPopupVisible = true;
    },
    hideProductDetails(state) {
      (state.selectedProduct = null), (state.isPopupVisible = false);
    },
  },
});

export const { showProductDetails, hideProductDetails } =
  productReducer.actions;

export default productReducer.reducer;
