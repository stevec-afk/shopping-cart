import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShopPage from "./components/ShopPage";
import CartPage from "./components/CartPage";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

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
