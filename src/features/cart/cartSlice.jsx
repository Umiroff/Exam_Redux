import { createSlice } from "@reduxjs/toolkit"
import productData from "../../utilis/data";
import getStore from "../../utilis/get";

const initialState = {
    data: productData,
    amount: 0,
    total: 0,
    isLoading: true,
    local: getStore('basket')
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.data = [];
        },
        removeItem: (state, action) => {
          const itemId = action.payload;
          state.data = state.local.filter((item) => item.id !== itemId);
        },
        increase: (state, { payload }) => {
            const cartItem = state.data.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
          },
        decrease: (state, { payload }) => {
            const cartItem = state.data.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.data.forEach((item) => {
              amount += item.amount;
              total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
          },
    },
})

export default cartSlice.reducer;
export const {clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions;