import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { name: 'Deja Brew', origin: 'guatemala', price: 9, roast: 'dark', quantity: 130, profit: 0, id: '0' },
  { name: 'Best Beans', origin: 'colombia', price: 11, roast: 'medium', quantity: 130, profit: 0, id: '1' },
  { name: 'Mocha Mountain Coffee', origin: 'seattle', price: 8, roast: 'dark', quantity: 130, profit: 0, id: '2' },
];

const shopControlSlice = createSlice ({
  name: 'shopControl',
  initialState,
  reducers: {
    addBurlap: (state, action) => {
      
    }
  }
});

export default shopControlSlice.reducer
export const { addBurlap } = shopControlSlice.actions
export const shopControlSelector = (state) => state.shopControl