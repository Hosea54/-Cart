import { CLEAR_CART } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  throw new Error(`no matching action type : ${action.type}`);
};
export default reducer;
