// Cart.js
import React, { useState } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem, IncreaseQuantity, DecreaseQuantity } from "../fiture/Store.js/Slice";

import { NavLink } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const [isCheckoutVisible, setCheckoutVisible] = useState(false);
  
  const data = useSelector((state) => state.Cart.cart);

  const total = data.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handleIncreaseQuantity = (id) => {
    dispatch(IncreaseQuantity({ id }));
  };
  
  const handleDecreaseQuantity = (id) => {
    dispatch(DecreaseQuantity({ id }));
  };

  const handleBuyNow = () => {
    setCheckoutVisible(true);
  };

  return (
    <div>
     

      <div className="cart-content">
        <div className="headOfcart">
          <h4>Product</h4>
          <h4>Title</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </div>

        <div>
          {data &&
            data.map((item, index) => {

              return (


                <div className="content-cart" key={index}>
                  {/* arr.push(item) */}
                  <img className="cartImage" src={item.img} alt="Not Found" />
                  <div className="cart-subcontent">
                    <h2>{item.model}</h2>
                    <button
                      className="remove-cart"
                      onClick={() => dispatch(RemoveItem({ id: item.id }))}
                    >
                      Remove Cart
                    </button>
                  </div>
                  <div>
                    <button
                      className="quantity-btn"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <h2 className="cartprice">
                    {"₹ " + item.price * item.quantity}
                  </h2>
                </div>
              );
            })}
        </div>

        <div className="total">
          <h2>Total </h2>
          <h1 style={{ color: "black" }}>{total}</h1>
        </div>

        <div className="buy">
          <NavLink to="/checkout" state={data}>
          <button  className="cartButton" onClick={handleBuyNow}>Buy Now</button>
          </NavLink>
        </div>
      </div>


    </div>
  );
};

export default Cart;
