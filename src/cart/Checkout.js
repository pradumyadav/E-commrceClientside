

import "./Cart.css"

import { useLocation, useNavigate} from "react-router-dom";
const Checkout = () => {
      
      const location=useLocation()
  

    const navi= useNavigate()
     

    const total = location.state.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    const handleClick=(e)=>{
        e.preventDefault()  
        navi("/buy")
    }
     
     
  return (
    <div className="checkout-container">
     
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="card">Credit Card Number:</label>
          <input type="text" id="card" name="card" required />
        </div>

        <div className="form-group">
          <label htmlFor="expiry">Card Expiry:</label>
          <input type="text" id="expiry" name="expiry" placeholder="MM/YY"/>
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" required />
        </div>

        <button onClick={handleClick} type="submit">Place Order</button>
      </form>
      <div>
         
      {location.state.map((item)=>{

        return (
        <>      
                  
                  <h2>Product: {item.title}</h2>
                  <h2 className="cartprice">
                   Price: {"₹ " + item.price * item.quantity}
                  </h2>
                  
                  </>
                  )
      })}
      <h1>Total :{total}</h1>

     </div>
    </div>
   
  );
};

export default Checkout;
