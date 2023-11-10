
import { useEffect, useState } from "react";
import Header from "../../header/Header";
import axios from "axios";
import Footer from "../../footer/Footer";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../fiture/Store.js/Slice";


          export default function WomenClothe (){
            const dispatch =useDispatch()
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
                              const{id=item.id,img=item.img,title=item.title,price=item.price} = item
                              console.log(id)
                               return (
                                <div>
                                  <NavLink to={`/dynamic/${item.id}`}>

                                <div className="clotheChild" key={index}>
                                    <div><img className="clothe_Img" src={item.img} alt="Not Found"/></div>
                                    <div className="titel">{item.title}</div>
                                    <div className="price">&#8377;&nbsp;{item.price}</div>
                                </div>
                                </NavLink>
                                <button onClick={()=>dispatch(addtoCart({id,img,title,price}))}>
                                Add To Cart 
                                </button>

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