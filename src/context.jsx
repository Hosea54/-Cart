import { createContext } from "react";
import { useContext, useReducer } from "react";
import reducer from "./reducer";
import { CLEAR_CART, INCREASE, REMOVE_ITEM } from "./actions";
import cartItems from "./data";

const AppContext = createContext();
const initialState = {
  isLoading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const remove = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  return (
    <AppContext.Provider value={{ ...state, clearCart, increase, remove }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
