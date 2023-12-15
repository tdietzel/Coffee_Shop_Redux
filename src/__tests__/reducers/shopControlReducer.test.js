import shopControlReducer, { addBurlap, deleteBurlap, showBurlap, editBurlap, updateBurlap, purchasedPound, backToShop, backToShop } from '../../redux/shopControlSlice'
import { expect, describe, test } from "vitest"

describe('shopControlSlice', () => {

  test('add a burlap to the inventory', () => {
    const initialState = [];
    const newBurlap = { name: 'Mocha Mountain Coffee', origin: 'seattle', price: 8, roast: 'dark', quantity: 130, profit: 0, id: '2' };

    expect(shopControlReducer(initialState, addBurlap(newBurlap))).toEqual([newBurlap]);
  });

  test('delete a burlap from current inventory', () => {
    const initialState = [
      { name: 'Mocha Mountain Coffee', origin: 'seattle', price: 8, roast: 'dark', quantity: 130, profit: 0, id: '2' },
      { name: 'Best Beans', origin: 'colombia', price: 11, roast: 'medium', quantity: 130, profit: 0, id: '1' }
    ];
    const expectedState = [{ name: 'Best Beans', origin: 'colombia', price: 11, roast: 'medium', quantity: 130, profit: 0, id: '1' }];

    expect(shopControlReducer(initialState, deleteBurlap('2'))).toEqual(expectedState);
  });

  test("shows the currently selected burlap", () => {
    const initialState = {
      burlaps: [
        { name: 'Deja Brew', origin: 'guatemala', price: 9, roast: 'dark', quantity: 130, profit: 0, id: '0' },
        { name: 'Best Beans', origin: 'colombia', price: 11, roast: 'medium', quantity: 130, profit: 0, id: '1' },
        { name: 'Mocha Mountain Coffee', origin: 'seattle', price: 8, roast: 'dark', quantity: 130, profit: 0, id: '2' }
      ],
      selectedBurlap: null
    };
    const currentSelectedBurlap = { name: 'Best Beans', origin: 'colombia', price: 11, roast: 'medium', quantity: 130, profit: 0, id: '1' };
    const expectedState = {
      burlaps: initialState.burlaps,
      selectedBurlap: currentSelectedBurlap
    };

    expect(shopControlReducer(initialState, showBurlap(currentSelectedBurlap))).toEqual(expectedState);
  });

  test('sets the selected burlap to edit mode', () => {
    const initialState = {
      burlaps: [{ name: 'Deja Brew', origin: 'guatemala', price: 9, roast: 'dark', quantity: 130, profit: 0, id: '0' },
      { name: 'Best Beans', origin: 'colombia', price: 11, roast: 'medium', quantity: 130, profit: 0, id: '1' },
      { name: 'Mocha Mountain Coffee', origin: 'seattle', price: 8, roast: 'dark', quantity: 130, profit: 0, id: '2' }],
      selectedBurlap: null,
      editMode: false,
      editedBurlap: null
    };
    const currentSelectedBurlap = { name: 'Best Beans', origin: 'colombia', price: 11, roast: 'medium', quantity: 130, profit: 0, id: '1' };
    const expectedState = {
      burlaps: initialState.burlaps,
      selectedBurlap: null,
      editMode: true,
      editedBurlap: currentSelectedBurlap
    };

    expect(shopControlReducer(initialState, editBurlap(currentSelectedBurlap))).toEqual(expectedState);
  });

  test('update the state with the edited burlap', () => {
    const currentSelectedBurlap = { name: 'Best Beans', origin: 'colombia', price: 11, roast: 'medium', quantity: 130, profit: 0, id: '1' };
    const initialState = {
      burlaps: [
        { name: 'Deja Brew', origin: 'guatemala', price: 9, roast: 'dark', quantity: 130, profit: 0, id: '0' },
        { name: 'Best Beans', origin: 'colombia', price: 11, roast: 'medium', quantity: 130, profit: 0, id: '1' },
        { name: 'Mocha Mountain Coffee', origin: 'seattle', price: 8, roast: 'dark', quantity: 130, profit: 0, id: '2' },
      ],
      selectedBurlap: null,
      editMode: true,
      editedBurlap: currentSelectedBurlap,
    };
  
    const updatedBurlap = { name: 'New Best Beans', origin: 'colombia', price: 5, roast: 'medium', quantity: 130, profit: 0, id: '1' };
  
    const action = updateBurlap({ editedBurlap: currentSelectedBurlap, editedValues: updatedBurlap });
    const newState = shopControlReducer(initialState, action);
  
    expect(newState.burlaps[1].name).toBe('New Best Beans');
    expect(newState.burlaps[1].price).toBe(5);
  });

  test('will -1 pound from the selected burlaps quantity & update the profit according to price', () => {
    const currentSelectedBurlap = { name: 'Deja Brew', origin: 'guatemala', price: 9, roast: 'dark', quantity: 130, profit: 0, id: '0' };
    const initialState = {
      burlaps: [
        { name: 'Deja Brew', origin: 'guatemala', price: 9, roast: 'dark', quantity: 130, profit: 0, id: '0' },
      ],
      selectedBurlap: currentSelectedBurlap,
      editMode: false,
      editedBurlap: null,
    };

    const newState = shopControlReducer(initialState, purchasedPound());
    expect(newState.burlaps[0].quantity).toEqual(129);
    expect(newState.burlaps[0].profit).toEqual(9);
  });
  
  test('update state to return to home page', () => {
    const currentSelectedBurlap = { name: 'Deja Brew', origin: 'guatemala', price: 9, roast: 'dark', quantity: 130, profit: 0, id: '0' };
    const initialState = {
      burlaps: [
        { name: 'Deja Brew', origin: 'guatemala', price: 9, roast: 'dark', quantity: 130, profit: 0, id: '0' },
      ],
      selectedBurlap: currentSelectedBurlap,
      editMode: true,
      editedBurlap: currentSelectedBurlap,
    };

    const newState = shopControlReducer(initialState, backToShop());
    expect(newState.selectedBurlap).toEqual(null);
    expect(newState.editMode).toEqual(false);
    expect(newState.editedBurlap).toEqual(null);
  });
});