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
            const [loadData,setLoadData]=useState(8)

            const handleNext=()=>{
              setLoadData(loadData+3);
            }

            useEffect(()=>{
                axios
                .get("https://e-commerce-hspl.onrender.com/api/findData")
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
                              data.filter((item)=>item.id%10===0).slice(0,loadData).map((item,index)=>{
                                const{id=item.id,img=item.img,title=item.title,price=item.price} = item

                                return (
                                  <div>
                                    <NavLink to={`/dynamic/${item.id}`}>
                                    <div className="homeChild" key={index}>
                                        <div><img className="home_Img" src={item.img} alt="Not Found"/></div>
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
                          <div className="home_Video">
                            <img src="https://uploads-ssl.webflow.com/63f53af6e7d3ad6807222368/644a04d84d0a0b0c0989993c_P_EFt0Y7fve8ARoGGiq2A7Nb-64Ky5Y3zgeIuAliQgiOScwSrCTXCRJVhatRylzPFjXQmhaJVoSj1rXeOGC0lZcPTD1Ok-qguKEiRisFVj_G24y-L372WWPB4ZOUye5nh97spOofwKLHcTEtlg.gif" style={{width:"98.5%"}} alt="Not Found"/>

                            </div>
                          
                          <Footer/>
                </div>
            )
        }