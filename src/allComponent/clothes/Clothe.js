
import axios from "axios";
import { useEffect, useState } from "react";

import Header from "../../header/Header";
import "./Clothe.css"
import { NavLink } from "react-router-dom";
import Footer from "../../footer/Footer";
               export default function Clothe (){

                const[data,setData] =useState([])

                useEffect(()=>{
                    axios
                    .get("http://localhost:4001/api/clothe")
                    .then((res)=>setData(res.data))
                    .catch((err)=>console.log(err))
                },[])
                return(
                    <div>
                         <Header/>
                        

                        <div className="clothe_SubParent">
                          <div className="clothe_Left">
                            <div className="clothe_Left_Child">

                         <h3 className="small_Nav"><NavLink to="/men">MEN</NavLink></h3>
                         <h3 className="small_Nav"><NavLink to="/women ">WOMEN</NavLink></h3> 
                         <h3 className="small_Nav"><NavLink to="/baby">BABYS</NavLink></h3> 
                            </div>
                          </div>
                          <div className="clothe_Right">
                          {
                            data.map((item,index)=>{
                              return (
                                <NavLink to={`/dynamic/${item.id}`}>

                                  <div className="clotheChild" key={index}>
                                      <div><img className="clothe_Img" src={item.img} alt="Not Found"/></div>
                                      <div>{item.title}</div>
                                      <div>{item.price}</div>
                                  </div>
                                </NavLink>

                              
                              )
                            })
                          }
                          </div>

                        </div>
                        <Footer/>
                    </div>
                )
                }