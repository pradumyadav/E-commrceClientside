import Header from "../../header/Header";

import { useEffect, useState } from "react";

import axios from "axios";
import "./Gym.css"
import { NavLink } from "react-router-dom";
import Footer from "../../footer/Footer";
       export default function Gym (){
        const[data,setData] =useState([])

        useEffect(()=>{
            axios
            .get("http://localhost:4001/api/gym")
            .then((res)=>setData(res.data))
            .catch((err)=>console.log(err))
        },[])
            return(
                <div>
                <Header/>
               

               <div className="gym_SubParent">
                 <div className="gym_Left">
                 <h3><NavLink to="/barbell">BARBELL</NavLink></h3> 
                 <h3><NavLink to="/dumbbell">DUMBBELL</NavLink></h3> 
                 <h3><NavLink to="/glove"> GLOVES</NavLink></h3> 
                 
                 </div>
                 <div className="gym_Right">
                 {
                   data.map((item,index)=>{
                     return (
                         <div className="gymChild" key={index}>
                             <div><img className="gym_Img" src={item.img} alt="Not Found"/></div>
                             <div>{item.title}</div>
                             <div>{item.price}</div>
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