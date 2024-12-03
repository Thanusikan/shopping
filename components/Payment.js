import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // To access passed data
import "./Payment.css";

function Payment() {
  const { state } = useLocation(); // Access the state passed via navigation
  const totalPrice = state?.totalPrice || 0; // Default to 0 if no data is passed

  const [paymentStatus, setPaymentStatus] = useState(null); // State for tracking payment status

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment success after clicking "Pay Now"
    setPaymentStatus("success");
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">💳 Payment</h2>
      <p className="payment-description">Enter your payment details below:</p>

      {/* Total Price Display */}
      <div className="total-price">
        <p>Total: <span>${totalPrice.toFixed(2)}</span></p>
      </div>

      {/* Payment Options */}
      <div className="payment-options">
        <div className="payment-option">
          <img src="/images/payon.png" alt="Credit Card" />
          <p>Card Payment</p>
        </div>
        <div className="payment-option">
          <img src="/images/OIP (5).jfif" alt="Online Payment" />
          <p>Online Payment</p>
        </div>
        <div className="payment-option">
          <img src="/images/OIP (5).jfif" alt="Cash" />
          <p>Cash Payment</p>
        </div>
      </div>

      {/* Payment Form */}
      <form className="payment-form" onSubmit={handlePayment}>
        <input type="text" placeholder="Account Number" className="input" />
        <input type="text" placeholder="Card Number" className="input" />
        <input type="text" placeholder="Cardholder Name" className="input" />
        <input type="text" placeholder="Expiry Date (MM/YY)" className="input" />
        <input type="text" placeholder="CVV" className="input" />
        <div className="visa-info">
          <img src="/images/payment-icon-in-different-style-F4TMHG.jpg" alt="Visa Card" />
          <p>We accept Visa cards</p>
        </div>
        <button className="button">💸 Pay Now</button>
      </form>

      {/* Show thank you message with animation on successful payment */}
      {paymentStatus === "success" && (
        <div className="thank-you-message">
          <p>Thank you for your payment! 💚</p>
        </div>
      )}
    </div>
  );
}

export default Payment;
