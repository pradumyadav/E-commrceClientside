
import { useEffect, useState } from "react";
import Header from "../../header/Header";
import axios from "axios";
import Footer from "../../footer/Footer";
import { NavLink } from "react-router-dom";


          export default function WomenClothe (){
            const[data,setData] =useState
            ([])
    
            useEffect(()=>{
                axios
                .get("http://localhost:4001/api/clothe")
                .then((res)=>setData(res.data.filter(item => item.type === "women")))
                .catch((err)=>console.log(err))
            },[])
                return(
                    <div>
                    <Header/>
                       

                         <div className="clothe_SubParent">
                         
                           <div className="clothe_Right">
                           {
                             data.map((item,index)=>{
                               return (
                                <NavLink to={`/dynamic/${item.id}`}>

                                   <div className="clotheChild" key={index}>
                                       <div><img className="clothe_Img" src={item.img} alt="Not Found"/></div>
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