import { useEffect, useState } from "react";
import ContinueImg from "../../continue/ContinueImg";
import axios from "axios";
//import video from "../../Video/rolex.mp4"
import "./Home.css"
import Header from "../../header/Header";
import { NavLink } from "react-router-dom";
import Footer from "../../footer/Footer";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../fiture/Store.js/Slice";

      export default function Home (){
        const dispatch =useDispatch()

            const[data,setData] =useState([])

            useEffect(()=>{
                axios
                .get("http://localhost:4001/api/findData")
                .then((res)=>setData(res.data))
                .catch((err)=>console.log(err))
            },[])
         
            return(
                <div className="home_Parent">
                     <Header/>
                          <ContinueImg/>
                          <h1 className="best">BEST SELLER</h1>
                          <div className="home_SubParent">
                            <div className="home_Right">
                           
                            {
                              data.filter((item)=>item.type==="babys").map((item,index)=>{
                                const{id=item.id,img=item.img,title=item.title,price=item.price} = item

                                return (
                                  
                                  <div>
                                    <NavLink to={`/dynamic/${item.id}`}>
                                    <div className="homeChild" key={index}>
                                        <div><img className="home_Img" src={item.img} alt="Not Found"/></div>
                                        <div className="titel">{item.title}</div>
                                        {/* <div className="price">{item.price}</div> */}
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
                            {/* <div className="home_Video">
                            <img src="https://media1.tenor.com/images/b9f0366ce2fcf04dda9da527d831bed1/tenor.gif?itemid=8171804" style={{width:"95%"}} alt="Not Found"/>

                            </div> */}

                          </div>
                          <Footer/>
                </div>
            )
        }