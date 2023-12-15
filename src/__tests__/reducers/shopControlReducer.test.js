import shopControlReducer, { addBurlap, deleteBurlap } from '../../redux/shopControlSlice'
import { expect, describe, test } from "vitest"

describe('shopControlSlice', () => {

  test('add a burlap to the inventory', () => {
    const initialState = [];
    const newBurlap = { name: 'Mocha Mountain Coffee', origin: 'seattle', price: 8, roast: 'dark', quantity: 130, profit: 0, id: '2' };

    expect(shopControlReducer(initialState, addBurlap(newBurlap))).toEqual([newBurlap]);
  });

  test('delete a burlap from current inventory', () => {
    const initialState = [{ name: 'Mocha Mountain Coffee', origin: 'seattle', price: 8, roast: 'dark', quantity: 130, profit: 0, id: '2' },
    { name: 'Best Beans', origin: 'colombia', price: 11, roast: 'medium', quantity: 130, profit: 0, id: '1' }];
    
    expect(shopControlReducer(initialState, deleteBurlap('2'))).toEqual([{ name: 'Best Beans', origin: 'colombia', price: 11, roast: 'medium', quantity: 130, profit: 0, id: '1' }]);
  });
});