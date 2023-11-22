// Cart.js

import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem, IncreaseQuantity, DecreaseQuantity } from "../fiture/Store.js/Slice";

// import { NavLink } from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js"


const Cart = () => {
  const dispatch = useDispatch();

  
  const data = useSelector((state) => state.Cart.cart);
    console.log(data)
  const total = data.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handleIncreaseQuantity = (id) => {
    dispatch(IncreaseQuantity({ id }));
  };
  
  const handleDecreaseQuantity = (id) => {
    dispatch(DecreaseQuantity({ id }));
  };

 //peyment integration
 const makePayment =async()=>{
  const stripe =await loadStripe("pk_test_51OF9HNSGSBjFGMDab3N5Rml5kzgrwMw9RYhJv6PXHz4cpymdUE1nikzSzy43a7v5y3vjMxcARZP3Sr58Rf3avGdM00mJ2RkzIR")

  const body ={
    products:data
  }
  const headers={
    "Content-Type":"application/json"
  }
  const response = await fetch("http://localhost:4001/out/create-checkout-session",{
          method:"POST",
          headers:headers,
          body:JSON.stringify(body)
  })
  const session= await response.json();

  const result =stripe.redirectToCheckout({
    sessionId:session.id
  })
  if(result.error){
    console.log(result.error)
  }
 }

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
          
          <button  className="cartButton" onClick={makePayment}>Buy Now</button>
       
        </div>
      </div>


    </div>
  );
};

export default Cart;
