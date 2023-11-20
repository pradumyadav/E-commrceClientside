// Checkout.js
import React from "react";
import "./Cart.css";
const Checkout = ({ data, total }) => {
  return (
    <div className="checkout-container">
      <h2>Checkout Summary</h2>
      <div className="checkout-content">
        <div>
          <h4>Product</h4>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item.model}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Quantity</h4>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item.quantity}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Total Price</h4>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{"₹ " + item.price * item.quantity}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="checkout-total">
        <h4>Total</h4>
        <p>{"₹ " + total}</p>
      </div>
      <p>Thank you for shopping with us!</p>
    </div>
  );
};

export default Checkout;
