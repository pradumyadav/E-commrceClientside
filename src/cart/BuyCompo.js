import React from 'react'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'
export const BuyCompo = () => {
    const navi= useNavigate()
  return (
    <div>
       <div class="order-container">
    <h2>Your order is done!</h2>
    <div class="congrats-animation">&#10004; Congratulations! &#10004;</div>
        <button onClick={()=>navi('/')}> Continue Shopping</button>
  </div>

        </div>
  )
}
