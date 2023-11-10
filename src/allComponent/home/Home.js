import { useEffect, useState } from "react";
import ContinueImg from "../../continue/ContinueImg";
import axios from "axios";
import video from "../../Video/rolex.mp4"

import "./Home.css"
import Header from "../../header/Header";
import { NavLink } from "react-router-dom";
import Footer from "../../footer/Footer";


      export default function Home (){

            const[data,setData] =useState([])

            useEffect(()=>{
                axios
                .get("http://localhost:4001/api/")
                .then((res)=>setData(res.data))
                .catch((err)=>console.log(err))
            },[])

            return(
                <div className="home_Parent">
                     <Header/>
                          <ContinueImg/>
                          <h1 className="best">BEST SELLER</h1>
                          <div className="home_SubParent">
                            <div className="home_Right">
                           
                            {
                              data.map((item,index)=>{
                                return (
                                  <NavLink to={`/dynamic/${item.id}`}>
                                    <div className="homeChild" key={index}>
                                        <div><img className="home_Img" src={item.img} alt="Not Found"/></div>
                                        <div className="titel">{item.title}</div>
                                        {/* <div className="price">{item.price}</div> */}
                                        <div className="price">&#8377;&nbsp;{item.price}</div>
                                    </div>
                                  </NavLink>
                                    
                                
                                )
                              })
                            }
                            </div>
                            <nav className="home_Video">
                            <video src={video} autoPlay loop muted playsInline></video>

                            </nav>

                          </div>
                          <Footer/>
                </div>
            )
        }