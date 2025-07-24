import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ cartItemCount }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">👨‍🍳HomeCook</div>

      <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/veg" onClick={toggleMenu}>Veg</Link>
        <Link to="/nonveg" onClick={toggleMenu}>Non-Veg</Link>
        <Link to="/chefs" onClick={toggleMenu}>Top Chefs</Link>
        <Link to="/login" onClick={toggleMenu}>Login</Link>
        <Link to="/signup" onClick={toggleMenu}>Sign Up</Link>
        <Link to="/cart" className="cart-icon" onClick={toggleMenu}>
          🛒Cart {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}


export default Navbar;
