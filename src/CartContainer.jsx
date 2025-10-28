import CartItem from "./CartItem";
import { useGlobalContext } from "./context";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const CartContainer = () => {
  const { cart, clearCart, totalCost } = useGlobalContext();
  const cartArray = Array.from(cart.entries());
  if (cartArray.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <ul className="icons-container">
        <li>
          <a href="https://github.com/Hosea54/Cart">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="www.linkedin.com/in/hosea-ejoh-9003682b4">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem;

          return <CartItem key={id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total<span>${totalCost.toFixed(2)}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={clearCart}>
          {" "}
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
