import { createContext } from "react";
import { useContext, useReducer } from "react";
import reducer from "./reducer";
import { CLEAR_CART, INCREASE } from "./actions";
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
  return (
    <AppContext.Provider value={{ ...state, clearCart, increase }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
