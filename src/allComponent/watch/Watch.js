import Header from "../../header/Header";

import { useEffect, useState } from "react";

import axios from "axios";
import "./Watch.css"
import { NavLink } from "react-router-dom";
import Footer from "../../footer/Footer";


           export default function Watch (){
            const[data,setData] =useState([])

            useEffect(()=>{
                axios
                .get("http://localhost:4001/api/watch")
                .then((res)=>setData(res.data))
                .catch((err)=>console.log(err))
            },[])
                return(
                    <div>
                    <Header/>
                   
    
                   <div className="watch_SubParent">
                     <div className="watch_Left">
                     <h3><NavLink to="/fastrck">FASTRACK</NavLink></h3> 
                     <h3><NavLink to="/sonata">SONATA</NavLink></h3> 
                     <h3><NavLink to="/firebolt">FIREBOLT</NavLink></h3> 
                     
                     </div>
                     <div className="watch_Right">
                     {
                       data.map((item,index)=>{
                         return (
                          <NavLink to={`/dynamic/${item.id}`}>

                             <div className="watchChild" key={index}>
                                 <div><img className="watch_Img" src={item.img} alt="Not Found"/></div>
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