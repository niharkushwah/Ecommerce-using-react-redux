import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
      product: [],
    },
    reducers: {},
    extraReducers: (builder) => {

      builder.addCase(getProducts.fulfilled, (state, action) => {
        state.product = action.payload;
      });
    },
  });

export const {fetchProduct} = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  });
// export function getProducts() {
//     return async function getProducts(dispatch, getState) {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const data = await response.json(); // Add await here to get the data
//       dispatch(fetchProduct(data));
//     };
//   }