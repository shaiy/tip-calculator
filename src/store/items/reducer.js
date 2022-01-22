import {
  ITEM_ADDED,
  ITEM_REMOVED,
  ITEM_PRICE_UPDATED,
  ITEM_QUANTITY_UPDATED
} from '../items/actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 142, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    const item = {
      uuid: id++,
      name: action.payload.itemName,
      price: +action.payload.price,
      quantity: 1
    };
    return [...state, item];
  }

  if (action.type === ITEM_REMOVED) {
    return state.filter((item) => item.uuid !== action.payload.uuid);
  }

  if (action.type === ITEM_PRICE_UPDATED) {
    return state.map((item) =>
      item.uuid === action.payload.uuid
        ? { ...item, price: +action.payload.price }
        : item
    );
  }

  if (action.type === ITEM_QUANTITY_UPDATED) {
    return state.map((item) =>
      item.uuid === action.payload.uuid
        ? { ...item, quantity: +action.payload.quantity }
        : item
    );
  }

  return state;
};

export default reducer;
