import { useCart } from "../../context/UseCart";
import PropTypes from 'prop-types';

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="cart-item-info">
        <h3>{item.title}</h3>
        <p className="cart-item-price">€ {item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-controls">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
      <p className="cart-item-subtotal">
        € {(item.price * item.quantity).toFixed(2)}
      </p>
      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
        🗑️
      </button>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;