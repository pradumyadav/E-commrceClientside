


import { useSelector } from "react-redux"

// import { Dispatch } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { addtoCart } from "../fiture/Store.js/Slice"
import { RemoveItem } from "../fiture/Store.js/Slice"

import "./Cart.css"
import { useEffect } from "react"
import axios from "axios"

         export default function Cart (){
            
            const selector =useSelector((state)=>state.Cart.cart)
            console.log(selector)
            const dispatch =useDispatch()
            const price = selector.map((item)=> item.price)
                let sum = 0;
                for(let i = 0 ; i < price.length ; i++)
                {
                    sum = price[i]+sum
                }
              const  handleAddtoCart = async (productId)=>{
                try {
                    // Retrieve the token from local storage
                    const token = localStorage.getItem("token");
                
                    // Set up the headers with the token
                    const headers = {
                      Authorization: `Bearer ${token}`,
                      "Content-Type": "application/json", // Adjust the content type based on your needs
                    };
                
                    // Make the POST request with Axios
                    const response = await axios.post("http://localhost:4001/user/addtocart",productId, { headers });
                
                    // Handle the response
                    console.log(response.data);
                  } catch (error) {
                    // Handle errors
                    console.error(error);
                  }
              }
                return (
                        <>
                    <div className="cart_Subparent">

                        {selector.map((item,index)=>{
                        const{id=item.id,img=item.img,title=item.title,price=item.price} = item

                            return(
                                <>
                                <div className="cartChild" key={index}>
                                <div><img className="cart_Img" src={item.img} alt="Not Found"/></div>
                                <div className="titel">{item.title}</div>
                                <button onClick={()=>handleAddtoCart(id)}>
                                Add To Cart 
                                </button>
                                <button className="cart_Remove" onClick={()=>dispatch(RemoveItem({id:item.id}))}>REMOVE</button>
                                <div className="price">&#8377;&nbsp;{item.price}</div>
                                </div>
                                
                            </>
                            )
                        })}
                      

                    </div>
                    <div className="total">
                        <div>{sum}</div>
                      </div>
                    </>
                )
            }