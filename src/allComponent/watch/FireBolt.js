
import { useEffect, useState } from "react";
import Header from "../../header/Header";
import axios from "axios";
import Footer from "../../footer/Footer";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../fiture/Store.js/Slice";

           export default function FireBolt (){
            const dispatch =useDispatch()

            const[data,setData] =useState
        ([])
        const [loadData,setLoadData]=useState(7)

        const handleNext=()=>{
          setLoadData(loadData+3);
        }

        useEffect(()=>{
            axios
            .get("http://localhost:4001/api/findData")
            .then((res)=>setData(res.data.filter(item => item.type === "firebolt")))
            .catch((err)=>console.log(err))
        },[])
                return(
                    <div>
                    <Header/>
                       

                         <div className="watch_SubParent">
                          
                           <div className="watch_Right">
                           {
                             data.filter((item)=>item.type==="firebolt").slice(0,loadData).map((item,index)=>{
                              const{id=item.id,img=item.img,title=item.title,price=item.price} = item

                               return (
                                
                                <div>
                                  <NavLink to={`/dynamic/${item.id}`}>

                                        <div className="watchChild" key={index}>
                                            <div><img className="watch_Img" src={item.img} alt="Not Found"/></div>
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