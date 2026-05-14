import { useState } from "react";
import { useCart } from "../../context/UseCart";
import PropTypes from "prop-types";

function ProductCard({product}) {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCart();

    const handleDecrement = () => {
        if(quantity > 1) setQuantity(q => q - 1);
    };

    const handleIncrement = () => {
        setQuantity(q => q + 1);
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setQuantity(1);
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">{product.price.toFixed(2)} €</p>
            <div className="quantity-controls">
                <button onClick={handleDecrement}>-</button>
                <input type="number" value={quantity} min="1" onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}/>
                <button onClick={handleIncrement}>+</button>
            </div>
            <button className="add-to-cart" onClick={handleAddToCart}>Aggiungi al carrello</button>
        </div>
    );
}

ProductCard.PropTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductCard;