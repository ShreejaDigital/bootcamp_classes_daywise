import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Shopify
        </Link>

        <div className="navbar-links">
          <Link to="/products" className="navbar-link">
            Products
          </Link>

          <Link to="/cart" className="navbar-cart">
            <AiOutlineShoppingCart />
            {/* {cartCount > 0 && <div className="cart-count">{cartCount}</div>} */}
          </Link>
        </div>
      </div>
    </div>
  );
}
