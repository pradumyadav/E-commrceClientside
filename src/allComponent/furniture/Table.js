
import { useEffect, useState } from "react";
import Header from "../../header/Header";
import axios from "axios";
import Footer from "../../footer/Footer";
import { NavLink } from "react-router-dom";

              export default function Table (){
                const[data,setData] =useState([])

                useEffect(()=>{
                    axios
                    .get("http://localhost:4001/api/furniture")
                    .then((res)=>setData(res.data.filter(item => item.type === "table")))
                    .catch((err)=>console.log(err))
                },[])
                    return(
                        <div>
                        <Header/>
                       
        
                       <div className="furniture_SubParent">
                        
                         <div className="furniture_Right">
                         {
                           data.map((item,index)=>{
                             return (
                              <NavLink to={`/dynamic/${item.id}`}>

                                 <div className="furnitureChild" key={index}>
                                     <div><img className="furniture_Img" src={item.img} alt="Not Found"/></div>
                                     <div className="titel">{item.title}</div>
                                     <div className="price">&#8377;&nbsp;{item.price}</div>
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