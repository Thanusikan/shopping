import React, { useState } from "react";
import "./FastSignin.css";
import { FaUserCircle } from "react-icons/fa"; // Importing an icon from react-icons

function FastSignin({ onSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add simple validation for demonstration
    if (username.trim() === "" || password.trim() === "") {
      setError("Both fields are required!");
    } else {
      setError("");
      alert("Signed in successfully!");
      onSignIn(); // Notify parent component about successful sign-in
    }
  };

  return (
    <div className="fast-signin-container">
      <div className="signin-header">
        <FaUserCircle size={60} className="signin-icon" />
        <h1>Welcome Back!</h1>
        <p className="signin-text">Please sign in to continue.</p>
      </div>
      <form className="fast-signin-form" onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default FastSignin;
