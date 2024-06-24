
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {
    getProductsSuccess: (state, action) => {
      state.items = action.payload;
      state.status = 'succeeded';
    },
    getProductsFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    }
  }
});

export const { getProductsSuccess, getProductsFailure } = productsSlice.actions;

export const fetchProducts = () => async dispatch => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    dispatch(getProductsSuccess(response.data));
  } catch (error) {
    dispatch(getProductsFailure(error.toString()));
  }
};

export default productsSlice.reducer;
