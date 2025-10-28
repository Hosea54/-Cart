import { createContext, useEffect } from "react";
import { useContext, useReducer } from "react";
import reducer from "./reducer";
import { CLEAR_CART, INCREASE, DECREASE, REMOVE_ITEM } from "./actions";
import cartItems from "./data";
import { getTotals } from "./utils";
const url = "https://6900fe21ff8d792314bc3d6e.mockapi.io/cartItems";
const AppContext = createContext();
const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };
  const remove = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  const fetchData = async () => {
    const response = await fetch(url);
    const cart = await response.json();
    console.log(cart);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        increase,
        remove,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
