
import { useEffect, useState } from "react";
import Header from "../../header/Header";
import axios from "axios";
import Footer from "../../footer/Footer";


           export default function FireBolt (){
            const[data,setData] =useState
        ([])

        useEffect(()=>{
            axios
            .get("http://localhost:4001/api/watch")
            .then((res)=>setData(res.data.filter(item => item.type === "firebolt")))
            .catch((err)=>console.log(err))
        },[])
                return(
                    <div>
                    <Header/>
                       

                         <div className="watch_SubParent">
                          
                           <div className="watch_Right">
                           {
                             data.map((item,index)=>{
                               return (
                                   <div className="watchChild" key={index}>
                                       <div><img className="watch_Img" src={item.img} alt="Not Found"/></div>
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