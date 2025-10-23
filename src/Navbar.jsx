import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h5>Cart</h5>
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
