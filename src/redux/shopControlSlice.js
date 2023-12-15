import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  burlaps: [{ name: 'Deja Brew', origin: 'guatemala', price: 9, roast: 'dark', quantity: 130, profit: 0, id: '0' },
  { name: 'Best Beans', origin: 'colombia', price: 11, roast: 'medium', quantity: 130, profit: 0, id: '1' },
  { name: 'Mocha Mountain Coffee', origin: 'seattle', price: 8, roast: 'dark', quantity: 130, profit: 0, id: '2' }],
  selectedBurlap: null,
};

const shopControlSlice = createSlice ({
  name: 'shopControl',
  initialState,
  reducers: {
    addBurlap: (state, action) => {
      state.push(action.payload);
    },
    deleteBurlap: (state, action) => {
      return state.filter((burlap) => action.payload !== burlap.id);
    },
    showBurlap: (state, action) => {
      
    }
  }
});

export default shopControlSlice.reducer
export const { addBurlap, deleteBurlap, showBurlap } = shopControlSlice.actions
export const shopControlSelector = (state) => state.shopControl