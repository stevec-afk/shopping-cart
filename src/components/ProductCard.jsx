import { useState } from "react";

function ProductCard(props) {
  const { product } = props;
  const [quantity, setQuantity] = useState(1);

  function handleIncrement() {
    if (quantity < 99) setQuantity(quantity + 1);
  }

  function handleDecrement() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  const formattedPrice = product.price.toFixed(2);

  return (
    <div>
      <h3>{product.title}</h3>
      <p>${formattedPrice}</p>

      <button onClick={handleDecrement}>-</button>
      <input type="number" value={quantity} readOnly />
      <button onClick={handleIncrement}>+</button>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
