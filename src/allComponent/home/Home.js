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
import { FaShippingFast } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { RiRefund2Fill } from "react-icons/ri";

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
                    
                            <div className='shipping'>
                          <div className='shipping1'>
                            <FaShippingFast className='icon1'/>
                            <h5>Free Shipping</h5>
                            <p> Welcome to our online storeM4,Big buys, but bigger savings on free savings day sale We have extended free shipping on all orders Get Free Shipping on all orders!</p>
                            </div>
                          <div className='shipping1'>
                            < RiRefund2Fill  className='icon1' />
                            <h5>Refund Policy</h5>
                            <p>Our 100% Refund Guarantee: Your Peace of Mind, Our Promise.Atyour satisfaction is our top priority. We understand that sometimes things may not go as planned, and that's why we're proud to offer a 100% Refund Guarantee. With this assurance.</p>
                            </div>
                          <div className='shipping1'>
                            <FaRegUser className='icon1'/>
                            <h5>Customer Support</h5>
                            <p>  At UrbanPulse your satisfaction is our priority, and that's why we're thrilled to offer 24/7 support. We understand that your needs don't follow a schedule, and neither do we. With our always-on support, you can shop, inquire, and resolve issues whenever it's convenient for you.</p>
                            </div>
                          </div>
                            
                          <Footer/>
                </div>
            )
        }