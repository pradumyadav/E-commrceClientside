

import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../header/Header";

        import "./Mobile.css"
           export default function Mobile (){
            const[data,setData] =useState
            ([])

            useEffect(()=>{
                axios
                .get("http://localhost:4001/api/mobile")
                .then((res)=>setData(res.data))
                .catch((err)=>console.log(err))
            },[])
            return(
                <div>
                     <Header/>
                        

                          <div className="mobile_SubParent">
                            <div className="mobile_Left">
                            
                            </div>
                            <div className="mobile_Right">
                            {
                              data.map((item,index)=>{
                                return (
                                    <div className="mobileChild" key={index}>
                                        <div><img className="mobile_Img" src={item.img} alt="Not Found"/></div>
                                        <div>{item.title}</div>
                                        <div>{item.price}</div>
                                    </div>
                                
                                )
                              })
                            }
                            </div>

                          </div>
                </div>
            )
            }