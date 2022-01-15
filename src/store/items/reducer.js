import { REMOVED_ITEM } from '../items/actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === REMOVED_ITEM) {
    return state.items.filter((item) => item.id !== action.payload.uuid);
  }

  return state;
};

export default reducer;
