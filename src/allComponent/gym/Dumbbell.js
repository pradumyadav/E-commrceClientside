import { useEffect, useState } from "react";
import Header from "../../header/Header";
import axios from "axios";
import Footer from "../../footer/Footer";
import { NavLink } from "react-router-dom";


        export default function Dumbbell (){
            const[data,setData] =useState
                ([])
    
                useEffect(()=>{
                    axios
                    .get("http://localhost:4001/api/gym")
                    .then((res)=>setData(res.data.filter(item => item.type === "dumbbell")))
                    .catch((err)=>console.log(err))
                },[])
            return(
                <div>
                    <Header/>
                       

                         <div className="gym_SubParent">
                          
                           <div className="gym_Right">
                           {
                             data.map((item,index)=>{
                               return (
                                <NavLink to={`/dynamic/${item.id}`}>

                                   <div className="gymChild" key={index}>
                                       <div><img className="gym_Img" src={item.img} alt="Not Found"/></div>
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