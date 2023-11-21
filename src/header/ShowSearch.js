import React from 'react'
import { useLocation } from 'react-router-dom'


import "./Search.css"
import { NavLink } from "react-router-dom";

 import { useDispatch } from "react-redux";

import Footer from '../footer/Footer';
import { addtoCart } from '../fiture/Store.js/Slice';
import Header from './Header';


export const ShowSearch = () => {
    const location =useLocation()
   
    const data = location.state
    console.log(data)
    const dispatch =useDispatch()

 
  return (
    <div className="home_Parent">
                     <Header/>
                         
                        
                          <div className="home_SubParent">
                            <div className="home_Right">
                           
                            {
                              data.map((item,index)=>{
                                const{id=item.id,img=item.img,title=item.title,price=item.price} = item

                                return (
                                  <div>
                                    <NavLink to={`/dynamic/${item.id}`}>
                                    <div className="homeChild" key={index}>
                                        <div><img className="home_Img" src={item.img} alt="Not Found"/></div>
                                        <div className="titel">{item.title}</div>                                       
                                        <div className="price">&#8377;&nbsp;{item.price}</div>
                                    </div>
                                  </NavLink>
                                  <button onClick={()=>dispatch(addtoCart({id,img,title,price}))}>
                                          Add To Cart 
                                          </button>
                                  </div>
                                    
                                
                                )
                              })
                            }
                            </div>
                          </div>
                        
                         
                          
                          <Footer/>
                </div>
            )
}
