import { Link } from "react-router-dom";

function Navbar(props) {
  const { cart = [] } = props;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
      <span>{totalItems}</span>
    </nav>
  );
}

export default Navbar;
