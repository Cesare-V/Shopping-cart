import { Link } from 'react-router-dom';
import { useCart } from '../../context/UseCart';
import './Navbar.css';

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">🛍️ IlMioNegozio</Link>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li>
          <Link to="/cart" className="cart-link">
            Cart
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;