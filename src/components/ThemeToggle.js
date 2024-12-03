// ThemeToggle.js
import React from "react";

function ThemeToggle({ toggleTheme, currentTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-button"
    >
      {currentTheme === "light-theme" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
}

export default ThemeToggle;
