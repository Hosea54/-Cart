import { FaCartPlus } from "react-icons/fa";
const Navbar = () => {
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
            <p className="total-amount">3</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
