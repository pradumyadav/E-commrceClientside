import { useEffect, useState } from "react";
import ContinueImg from "../../continue/ContinueImg";
import axios from "axios";

import "./Home.css"
import Header from "../../header/Header";


      export default function Home (){

            const[data,setData] =useState([])

            useEffect(()=>{
                axios
                .get("http://localhost:4001/api/")
                .then((res)=>setData(res.data))
                .catch((err)=>console.log(err))
            },[])

            return(
                <div>
                     <Header/>
                          <ContinueImg/>

                          <div className="home_SubParent">
                            {
                              data.map((item,index)=>{
                                return (
                                    <div className="homeChild" key={index}>
                                        <div><img className="home_Img" src={item.img} alt="Not Found"/></div>
                                        <div>{item.title}</div>
                                        <div>{item.price}</div>
                                    </div>
                                
                                )
                              })
                            }

                          </div>
                </div>
            )
        }