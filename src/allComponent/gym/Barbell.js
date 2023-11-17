
import { useEffect, useState } from "react";
import Header from "../../header/Header";
import axios from "axios";
import Footer from "../../footer/Footer";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../fiture/Store.js/Slice";


            export default function Barbell(){
              const dispatch =useDispatch()
                const[data,setData] =useState
                ([])
                const [loadData,setLoadData]=useState(7)

                const handleNext=()=>{
                  setLoadData(loadData+3);
                }
    
                useEffect(()=>{
                    axios
                    .get("https://e-commerce-hspl.onrender.com/api/findData")
                    .then((res)=>setData(res.data.filter(item => item.type === "barbell")))
                    .catch((err)=>console.log(err))
                },[])
                return(
                    <div>
                    <Header/>
                       

                         <div className="gym_SubParent">
                           
                           <div className="gym_Right">
                           {
                             data.filter((item)=>item.type==="barbell").slice(0,loadData).map((item,index)=>{
                              const{id=item.id,img=item.img,title=item.title,price=item.price} = item
                              console.log(id)
                               return (
                                <div>
                                  <NavLink to={`/dynamic/${item.id}`}>

                                  <div className="gymChild" key={index}>
                                      <div><img className="gym_Img" src={item.img} alt="Not Found"/></div>
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
                         <div className="loadMore_Parent">
                        <button onClick={handleNext} className="loadMore">
                        Load More
                      </button>
                      </div>
                         <Footer/>
               </div>
                )
            }