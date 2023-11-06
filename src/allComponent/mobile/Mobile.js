

import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../header/Header";
import { NavLink } from "react-router-dom";

        import "./Mobile.css"
import Footer from "../../footer/Footer";
           export default function Mobile (){
            const[data,setData] =useState
            ([])

            useEffect(()=>{
                axios
                .get("http://localhost:4001/api/mobile")
                .then((res)=>setData(res.data))
                .catch((err)=>console.log(err))
            },[])
            return(
                <div>
                     <Header/>
                        

                          <div className="mobile_SubParent">
                            <div className="mobile_Left">
                           <h3 className="left_NavBar"><NavLink to="/iphone">IPHONE</NavLink></h3> 
                           <h3 className="left_NavBar"><NavLink to="/infinix">INFINIX</NavLink></h3>
                           <h3 className="left_NavBar"><NavLink to="/vivo">VIVO</NavLink></h3>
                            </div>
                            <div className="mobile_Right">
                            {
                              data.map((item,index)=>{
                                return (
                                  <NavLink to={`/dynamic/${item.id}`}>
                                       <div className="mobileChild" key={index}>
                                        <div><img className="mobile_Img" src={item.img} alt="Not Found"/></div>
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