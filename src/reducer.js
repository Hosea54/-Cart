import { CLEAR_CART, INCREASE, REMOVE_ITEM, DECREASE } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  //Increase

  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    console.log(item);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(itemId, newItem);

    return { ...state, cart: newCart };
  }
  //Decrease
  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    console.log(item);
    if (item.amount === 1) {
      newCart.delete(itemId);
      return { ...state, cart: newCart };
    }
    const newItem = { ...item, amount: item.amount - 1 };
    newCart.set(itemId, newItem);

    return { ...state, cart: newCart };
  }
  //RemoveItem
  if (action.type === REMOVE_ITEM) {
    const itemId = action.payload.id;
    const newCart = new Map(state.cart);
    newCart.delete(itemId);
    return { ...state, cart: newCart };
  }
  throw new Error(`no matching action type : ${action.type}`);
};

export default reducer;
