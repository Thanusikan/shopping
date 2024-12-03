import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import hooks for navigation and state
import "./Order.css"; // Import the CSS for styles

function Order() {
  const { state } = useLocation(); // Get passed state from the Menu component
  const { item } = state || {}; // Destructure item data
  const navigate = useNavigate(); // Hook for navigating between routes

  const [quantity, setQuantity] = useState(1);
  const unitPrice = parseFloat(item?.offerpricr?.substring(1)) || 10; // Extract numeric price
  const [total, setTotal] = useState(unitPrice); // Set initial total price

  const updateTotal = (newQuantity) => {
    const newTotal = newQuantity * unitPrice;
    setQuantity(newQuantity);
    setTotal(newTotal);
  };

  const handlePayment = () => {
    navigate("/payment", { state: { totalPrice: total } }); // Navigate to Payment and pass totalPrice
  };

  if (!item) return <div>Item not found</div>; // Handle case when item is undefined

  return (
    <div className="order-container">
      <h2>📦 Place Your Order</h2>
      <img src={item.img} alt={item.name} className="order-image" />
      <h3>{item.name}</h3>
      <p>Price: {item.price}</p>
      <p>Discount: {item.offer}</p>
      
      <div className="quantity-container">
        <label>Quantity:</label>
        <input 
          type="number" 
          min="1" 
          value={quantity} 
          onChange={(e) => updateTotal(e.target.value)} 
          className="quantity-input"
        />
      </div>
      
      <div className="total-price">💵 Total: ${total.toFixed(2)}</div>

      <div className="buttons-container">
        <button className="button pay-button" onClick={handlePayment}>
          💳 Proceed to Payment
        </button>
        <button className="button place-order-button">
          📤 Place Order
        </button>
      </div>

      {/* Add Anime Image */}
      <div className="anime-container">
        <img 
          src="https://example.com/your-anime-image.jpg" 
          alt="Anime Character" 
          className="anime-image"
        />
      </div>
    </div>
  );
}

export default Order;
