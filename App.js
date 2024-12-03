import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Payment from "./components/Payment";
import Order from "./components/Order";
import FastSignin from "./components/FastSignin"; // Fast Sign-In Component
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light-theme");
  const [activeTheme, setActiveTheme] = useState("light-theme");
  const [isSignedIn, setIsSignedIn] = useState(false); // Track sign-in status

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      setActiveTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setActiveTheme(newTheme); // Set the active theme
    localStorage.setItem("theme", newTheme); // Save theme in localStorage
  };

  useEffect(() => {
    // Apply the selected theme to the body element
    document.body.className = theme;
  }, [theme]);

  const handleSignIn = () => {
    setIsSignedIn(true); // Set sign-in status to true
  };

  return (
    <Router>
      <Navbar />
      {/* Theme Selection */}
      <div className="theme-selector">
        <button
          className={activeTheme === "light-theme" ? "active" : ""}
          onClick={() => handleThemeChange("light-theme")}
        >
          Light
        </button>
        <button
          className={activeTheme === "dark-theme" ? "active" : ""}
          onClick={() => handleThemeChange("dark-theme")}
        >
          Dark
        </button>
        <button
          className={activeTheme === "blue-theme" ? "active" : ""}
          onClick={() => handleThemeChange("blue-theme")}
        >
          Blue
        </button>
        <button
          className={activeTheme === "red-theme" ? "active" : ""}
          onClick={() => handleThemeChange("red-theme")}
        >
          Red
        </button>
        <button
          className={activeTheme === "green-theme" ? "active" : ""}
          onClick={() => handleThemeChange("green-theme")}
        >
          Green
        </button>
      </div>

      {/* Conditional Fast Sign-In */}
      {!isSignedIn && (
        <FastSignin onSignIn={handleSignIn} />
      )}

      {/* Application Routes */}
      {isSignedIn && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
