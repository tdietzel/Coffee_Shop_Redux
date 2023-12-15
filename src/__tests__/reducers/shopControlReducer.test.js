import shopControlReducer, {addBurlap} from '../../redux/shopControlSlice'
import { expect, describe, test } from "vitest"

describe('shopControlSlice', () => {
  const initialState = [];
  const newBurlap = { name: 'Mocha Mountain Coffee', origin: 'seattle', price: 8, roast: 'dark', quantity: 130, profit: 0, id: '2' };

  test('add a burlap to the inventory', () => {
    expect(shopControlReducer(initialState, addBurlap(newBurlap))).toEqual([newBurlap])
  });
});