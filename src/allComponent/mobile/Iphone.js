import { useEffect, useState } from "react";
import Header from "../../header/Header";
import axios from "axios";
import Footer from "../../footer/Footer";
import { NavLink } from "react-router-dom";



       export default function Iphone (){
        const[data,setData] =useState
            ([])

            useEffect(()=>{
                axios
                .get("http://localhost:4001/api/mobile")
                .then((res)=>setData(res.data.filter(item => item.type === "iphone")))
                .catch((err)=>console.log(err))
            },[])
            return(
                <div>
                     <Header/>
                        

                          <div className="mobile_SubParent">
                          
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