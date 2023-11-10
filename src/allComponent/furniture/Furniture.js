import { useEffect, useState } from "react";
import Header from "../../header/Header";
import axios from "axios";

import "./Furniture.css"
import { NavLink } from "react-router-dom";
import Footer from "../../footer/Footer";


      export default function Furniture (){
        const[data,setData] =useState([])

        useEffect(()=>{
            axios
            .get("http://localhost:4001/api/furniture")
            .then((res)=>setData(res.data))
            .catch((err)=>console.log(err))
        },[])
            return (
                <div>
                <Header/>
               

               <div className="furniture_SubParent">
                 <div className="furniture_Left">
                 <h3><NavLink to="/shelf">SHELF</NavLink></h3> 
                 <h3><NavLink to="/sofa">SOFA</NavLink></h3> 
                 <h3><NavLink to="/table">TABLE</NavLink></h3> 
                 </div>
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