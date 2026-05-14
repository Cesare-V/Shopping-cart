import { useCart } from "../../context/UseCart";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "./CartPage.css";

function CartPage() {
  const { cartItems, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <h1>Carrello</h1>
        <p>Il tuo carrello è vuoto.</p>
        <Link to="/shop" className="continue-shopping">
          Vai allo shop
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1>Carrello</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-footer">
        <p className="cart-total">Totale: € {cartTotal.toFixed(2)}</p>
        <Link to="/shop" className="continue-shopping">
          Continua lo shopping
        </Link>
      </div>
    </main>
  );
}

export default CartPage;