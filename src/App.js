// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
// import Product from './components/Product';
import CartPage from "./components/CartPage"; // New CartPage component
import Home from "./components/Home"; // Home component for products
// import images
import earphone1 from "./images/earphone1.webp";
import earphone2 from "./images/earphone2.webp";
import earphone3 from "./images/earphone3.webp";
import watch1 from "./images/watch1.webp";
import watch2 from "./images/watch2.webp";
import watch3 from "./images/watch3.webp";
import watch4 from "./images/watch4.webp";
import watch5 from "./images/watch5.webp";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: "Evolve 2 Play", price: 8000, image: earphone1 },
    { id: 2, name: "ColorFit Pulse 2 Pro", price: 5000, image: earphone2 },
    { id: 3, name: "Buds X Prime", price: 2000, image: earphone3 },
    { id: 4, name: "BassBuds Urban", price: 1500, image: watch1 },
    { id: 5, name: "BassBuds Loop", price: 1000, image: watch2 },
    { id: 6, name: "BassBuds Duo", price: 1200, image: watch3 },
    { id: 7, name: "BassBuds Pro", price: 1800, image: watch4 },
    { id: 8, name: "BassBuds Sport", price: 1300, image: watch5 },
  ];

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateCartItem = (productId, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeCartItem = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <div className="App">
        <NavBar cartItems={cartItems} />

        <Routes>
          <Route
            path="/"
            element={<Home products={products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                updateCartItem={updateCartItem}
                removeCartItem={removeCartItem}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
