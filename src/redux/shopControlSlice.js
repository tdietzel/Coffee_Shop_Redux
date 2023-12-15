import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  burlaps: [{ name: 'Deja Brew', origin: 'guatemala', price: 9, roast: 'dark', quantity: 130, profit: 0, id: '0' },
  { name: 'Best Beans', origin: 'colombia', price: 11, roast: 'medium', quantity: 130, profit: 0, id: '1' },
  { name: 'Mocha Mountain Coffee', origin: 'seattle', price: 8, roast: 'dark', quantity: 130, profit: 0, id: '2' }],
  selectedBurlap: null,
  editMode: false,
  editedBurlap: null
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
      return { ...state, selectedBurlap: action.payload};
    },
    editBurlap: (state, action) => {
      return { ...state, editMode: true, editedBurlap: action.payload};
    },
    updateBurlap: (state, action) => {
      const { editedBurlap, editedValues } = action.payload;
      return {
        ...state,
        burlaps: state.burlaps.map((burlap) =>
          burlap.id === editedBurlap.id ? { ...burlap, ...editedValues } : burlap
        ),
        editMode: false,
        editedBurlap: null
      };
    },
    purchasedPound: (state) => {
      const updatedBurlap = state.burlaps.map((burlap) =>
        burlap.id === state.selectedBurlap.id ? { ...burlap, quantity: burlap.quantity - 1, profit: burlap.profit + burlap.price } : burlap
      );
      return {
        ...state, burlaps: updatedBurlap
      };
    },
    backToShop: (state) => {
      return { 
        ...state,
        selectedBurlap: null,
        editMode: false,
        editedBurlap: null
      };
    }
  }
});

export default shopControlSlice.reducer
export const { addBurlap, deleteBurlap, showBurlap, editBurlap, updateBurlap, purchasedPound, backToShop } = shopControlSlice.actions
export const shopControlSelector = (state) => state.shopControl