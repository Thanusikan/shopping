import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUtensils, FaShoppingCart, FaCreditCard, FaInfoCircle } from "react-icons/fa"; // Importing icons
import "./Navbar.css";

function Navbar({ onThemeToggle }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/logo192.png" alt="Chicken Rice Shop Logo" className="logo" />
        <h1>Aunty Rice Shop</h1>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            <FaHome className="nav-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/menu" className="nav-link">
            <FaUtensils className="nav-icon" /> Menu
          </Link>
        </li>
        <li>
          <Link to="/order" className="nav-link">
            <FaShoppingCart className="nav-icon" /> Order
          </Link>
        </li>
        <li>
          <Link to="/payment" className="nav-link">
            <FaCreditCard className="nav-icon" /> Payment
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            <FaInfoCircle className="nav-icon" /> About Us
          </Link>
        </li>
      </ul>

      {/* Order Now Button */}
      <div className="order-now-btn">
        <Link to="/order" className="btn">Order Now</Link>
      </div>
       
    </nav>
  );
}

export default Navbar;
