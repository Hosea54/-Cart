import { createContext } from "react";
import { useContext, useReducer } from "react";
const AppContext = createContext();
const initialState = {
  isLoading: false,
};
const reducer = (state, action) => {
  return state;
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
