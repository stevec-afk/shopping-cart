import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShopPage from "./components/ShopPage";
import CartPage from "./components/CartPage";

function App() {
  const [cart, setCart] = useState([]);

  const mockProduct = {
    id: 1,
    title: "Test Backpack",
    price: 99.99,
    image: "https://example.com",
  };

  const products = [mockProduct];

  function handleAddToCart(product, quantity) {
    const updatedCart = [...cart, { ...product, quantity }];
    setCart(updatedCart);
  }

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route
          path="/shop"
          element={<ShopPage products={products} onAddToCart={handleAddToCart} />}
        />
        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
