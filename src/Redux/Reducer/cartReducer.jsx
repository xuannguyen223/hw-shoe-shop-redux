import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addProduct(state, action) {
      const { payload } = action;
      console.log("state: ", current(state));

      const itemIndex = state.cart.findIndex((item) => item.id === payload.id);

      if (itemIndex !== -1) {
        state.cart[itemIndex].orderQuantity++;
      } else {
        const item = {
          ...payload,
          orderQuantity: 1,
        };

        state.cart.push(item);
      }
    },
    deleteProduct(state, action) {
      const { payload } = action;
      const indexRemove = state.cart.findIndex((item) => item.id === payload);
      state.cart.splice(indexRemove, 1);
    },
    updateQuantity(state, action) {
      const { payload } = action;
      const itemUpdateIndex = state.cart.findIndex(
        (item) => item.id === payload.id
      );
      state.cart[itemUpdateIndex].orderQuantity += payload.quantity;
      if (state.cart[itemUpdateIndex].orderQuantity === 0) {
        state.cart.splice(itemUpdateIndex, 1);
      }
    },
  },
});

export const { addProduct, deleteProduct, updateQuantity } =
  cartReducer.actions;

export default cartReducer.reducer;
