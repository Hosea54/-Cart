import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Navbar = () => {
  const { totalAmount } = useGlobalContext();
  console.log(totalAmount);

  return (
    <nav>
      <div className="nav-center">
        <div className="logo">
          <h3>Shoppingcart</h3>
          <p>useReducer</p>
        </div>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{totalAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
