import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Veg from "./pages/Veg";
import NonVegMeals from "./pages/NonVegMeals";
import TopChefs from "./pages/TopChefs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TodaysMeals from "./components/TodaysMeals";
import Cart from "./pages/Cart";
import ChefDashboard from "./pages/ChefDashboard";
import OrderConfirmation from "./pages/orderConfirmation";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (meal) => {
    setCart((prevCart) => [...prevCart, meal]);
    alert(`${meal.name} added to cart!`);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartItemCount = cart.length;

  return (
    <div className="app">
      <Navbar cartItemCount={cartItemCount} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVegMeals />} />
          <Route path="/chefs" element={<TopChefs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chef-dashboard" element={<ChefDashboard />} />
          <Route
            path="/meals"
            element={<TodaysMeals handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cart}
                removeFromCart={handleRemoveFromCart}
                clearCart={handleClearCart}
              />
            }
          />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
