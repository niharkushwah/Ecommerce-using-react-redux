import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        remove: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },

    }
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
export const { remove } = cartSlice.actions;