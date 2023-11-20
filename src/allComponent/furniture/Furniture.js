import { useEffect, useState } from "react";
import Header from "../../header/Header";
import axios from "axios";

import "./Furniture.css"
import { NavLink } from "react-router-dom";
import Footer from "../../footer/Footer";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../fiture/Store.js/Slice";


      export default function Furniture (){

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
            return (
                <div>
                <Header/>
               

               <div className="furniture_SubParent">
                 <div className="furniture_Left">
                 <div className="clothe_Left_Child">
                 <h3 className="small_Nav"><NavLink to="/shelf">SHELF</NavLink></h3> 
                 <h3 className="small_Nav"><NavLink to="/sofa">SOFA</NavLink></h3> 
                 <h3 className="small_Nav"><NavLink to="/table">TABLE</NavLink></h3> 
                 </div>
                 </div>
                 <div className="furniture_Right">
                 {
                   data.filter((item)=>item.cat==="furniture").slice(0,loadData).slice(0,loadData).map((item,index)=>{
                    const{id=item.id,img=item.img,title=item.title,price=item.price} = item
                    console.log(id)
                     return (
                     <div>

                       <NavLink to={`/dynamic/${item.id}`}>

                      <div className="furnitureChild" key={index}>
                        <div><img className="furniture_Img" src={item.img} alt="Not Found"/></div>
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