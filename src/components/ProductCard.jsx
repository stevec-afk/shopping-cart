import { useState } from "react";

function ProductCard(props) {
  const { product, onAddToCart } = props;
  const [quantity, setQuantity] = useState(1);

  function handleIncrement() {
    if (quantity < 99) setQuantity(quantity + 1);
  }

  function handleDecrement() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  function handleAddToCartClick() {
    if (onAddToCart) {
      onAddToCart(product, quantity);
    }
  }

  const formattedPrice = product.price.toFixed(2);

  return (
    <div>
      <h3>{product.title}</h3>
      <p>${formattedPrice}</p>

      <button onClick={handleDecrement}>-</button>
      <input type="number" value={quantity} readOnly />
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleAddToCartClick}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
