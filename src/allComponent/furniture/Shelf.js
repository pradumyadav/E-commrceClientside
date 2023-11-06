
import { useEffect, useState } from "react";
import Header from "../../header/Header";
import axios from "axios";
import Footer from "../../footer/Footer";

        
        export default function Shelf (){
            const[data,setData] =useState([])

        useEffect(()=>{
            axios
            .get("http://localhost:4001/api/furniture")
            .then((res)=>setData(res.data.filter(item => item.type === "shelf")))
            .catch((err)=>console.log(err))
        },[])
            return (
                <div>
                <Header/>
               

               <div className="furniture_SubParent">
                
                 <div className="furniture_Right">
                 {
                   data.map((item,index)=>{
                     return (
                         <div className="furnitureChild" key={index}>
                             <div><img className="furniture_Img" src={item.img} alt="Not Found"/></div>
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