import { createContext } from "react";
import { useContext, useReducer } from "react";
import reducer from "./reducer";
import { CLEAR_CART } from "./actions";
import cartItems from "./data";

const AppContext = createContext();
const initialState = {
  isLoading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
