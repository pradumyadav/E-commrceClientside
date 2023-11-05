
import axios from "axios";
import { useEffect, useState } from "react";
//import ContinueImg from "../../continue/ContinueImg";
import Header from "../../header/Header";
import "./Clothe.css"
               export default function Clothe (){

                const[data,setData] =useState([])

                useEffect(()=>{
                    axios
                    .get("http://localhost:4001/api/clothe")
                    .then((res)=>setData(res.data))
                    .catch((err)=>console.log(err))
                },[])
                return(
                    <div>
                         <Header/>
                        

                        <div className="clothe_SubParent">
                          <div className="clothe_Left">
                          
                          </div>
                          <div className="clothe_Right">
                          {
                            data.map((item,index)=>{
                              return (
                                  <div className="clotheChild" key={index}>
                                      <div><img className="clothe_Img" src={item.img} alt="Not Found"/></div>
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