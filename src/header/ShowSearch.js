import React from 'react'
import { useLocation } from 'react-router-dom'
//import { useEffect, useState } from "react";
//import Header from "../../header/Header";
//import axios from "axios";

import "./Search.css"
import { NavLink } from "react-router-dom";
// import Footer from "../../footer/Footer";
 import { useDispatch } from "react-redux";

import Footer from '../footer/Footer';
import { addtoCart } from '../fiture/Store.js/Slice';
import Header from './Header';
// import { addtoCart } from "../../fiture/Store.js/Slice";
// import ContinueImg from '../continue/ContinueImg';

export const ShowSearch = () => {
    const location =useLocation()
   
    const data = location.state
    console.log(data)
    const dispatch =useDispatch()

    // const[data1,setData] =useState([])
    // const [loadData,setLoadData]=useState(7)

    // const handleNext=()=>{
    //   setLoadData(loadData+3);
    // }
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
                          {/* <div className="loadMore_Parent">
                        <button onClick={handleNext} className="loadMore">
                        Load More
                      </button>
                      </div> */}
                         
                          
                          <Footer/>
                </div>
            )
}
