import React, { useEffect, useState } from "react";
import "./Header.css";
import basketImg from "../img/add-to-cart.png";
import { Link, NavLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux"
import seracImg from "../img/search.png"
import profileImg from "../img/profile.png"
import axios from "axios";
export default function Header() {

  const cardCount = useSelector((state)=>state.Cart.cart)
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const[isMobileHovered,setIsMobileHovered]=useState(false)
  const[isClotheHovered,setIsClotheHovered]=useState(false)
  const[isFurnitureHovered,setIsFurnitureHovered]=useState(false)
  const[isWatchHovered,setIsWatchHovered]=useState(false)
  const[isGymHovered,setIsGymHovered]=useState(false)
  const [searchData,setSearchData]=useState([])
  const[val,setval]=useState({value:"",btn:""})
  const [query, setQuery] = useState("");
  // const [results, setResults] = useState([]);
const token=localStorage.getItem("token")
const userName=localStorage.getItem("name")
const Nav=useNavigate();

useEffect(()=>{
  if(token){
    setval({
      value:userName,
      btn:"LogOut"
    });
}
else{
  setval({
    value:"Profile",
    btn:"SignIn"
  })
}
},[token,Nav,userName])

const handlelogout= ()=>{
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  Nav("/")
}
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

 

  const handleChange=(e)=>{
    setQuery(e.target.value)

  }
  axios.get(`http://localhost:4001/api/search?title=${query}`)
  .then((res)=>setSearchData(res.data))
  .catch(err=>console.log(err))
  
  const handleSearch=()=>{
   
  }

  return (
    <div>

      <div className="top1">
        <div className="logo">UrbanPulse</div>
        <div className="top1_right"> 
        <div>
        <input className="search_Bar" onChange={handleChange}/>
        <button onClick={handleSearch}><Link to="/search" state={searchData}><img className="seracImg" src={seracImg} alt="Not Found"></img></Link></button>
        </div>
        <NavLink to="/cart">
        <img className="basket_Img basket" src={basketImg} alt="Not Found" /><span className="span1" >{cardCount.length}</span>
        </NavLink>
          
       

         <div className="profile"><img className="profileImg" src={profileImg} alt="Not Found"></img>
                <div >
                  <span>{val.value}</span>
                  {
                    val.btn === "LogOut" ? <span onClick={handlelogout}>{val.btn}</span> :  <span><NavLink to='/login'>{val.btn}</NavLink></span>
                  }
                </div>
            </div>

         <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        </div>
      </div>

      <nav className={`nav2 ${isMenuOpen ? "open" : ""}`}>
        <div className="ham_Div">
        <input className="search" placeholder="Search Here"></input>

        <NavLink to="/cart">
        <img className="ham_Basket_Img2" src={basketImg} alt="Not Found" />
        <span className="span2">{cardCount.length}</span>
        </NavLink>
      
        <div className="sign">
          <button className="ham_Btn">Sign In</button>
        </div>

        </div>
     
        <div
          className="home-container"
          onMouseEnter={() => setIsHomeHovered(true)}
          onMouseLeave={() => setIsHomeHovered(false)}
        >
          <NavLink to="/">
            <ul  type="none">
              <li>HOME</li>
              {isHomeHovered && (
                <ul type="none" className="menu">
                  <NavLink to="/clothe"><li>Clothe</li></NavLink> 
                  <NavLink to="/mobile"><li>Mobile</li></NavLink>  
                  <NavLink to="/furniture"><li>Furniture</li></NavLink>
                  <NavLink to="/watch"><li>Watch</li></NavLink>
                  <NavLink to="/gym"><li>Gym</li></NavLink>
                </ul>
              )}
            </ul>
          </NavLink>
        </div>
        
        <div
         className="mobile-container"
         onMouseEnter={() => setIsMobileHovered(true)}
         onMouseLeave={() => setIsMobileHovered(false)} 
        >
             <NavLink to="/mobile">
          <ul  type="none">

            <li>MOBILE</li>
            {isMobileHovered && (
                <ul type="none" className="menu">
                <NavLink to="/iphone"><li>IPhone</li></NavLink>
                <NavLink to="/infinix"><li>Infinix</li></NavLink>
                <NavLink to="/vivo"><li>Vivo</li></NavLink>
                </ul>
            )}
          </ul>
        </NavLink>
        </div>
      
       <div
        className="furniture-container"
        onMouseEnter={() => setIsFurnitureHovered(true)}
        onMouseLeave={() => setIsFurnitureHovered(false)} 
       >
       <NavLink to="/furniture">
          <ul type="none">
            <li>FURNITURE</li>

            {isFurnitureHovered && (
                 <ul type="none" className="menu" >
                <NavLink to="/table"><li>Table</li></NavLink>  
                <NavLink to="/shelf"><li>Shelf</li></NavLink> 
                <NavLink to="/sofa"><li>Sofa</li></NavLink> 
                  </ul>
            )}
              </ul>
        </NavLink>
       </div>
       <div 
          className="watch-container"
          onMouseEnter={() => setIsWatchHovered(true)}
          onMouseLeave={() => setIsWatchHovered(false)} 
       >
       <NavLink to="/watch">
          <ul type="none">
            <li>WATCH</li>
            {isWatchHovered && (
                <ul type="none" className="menu">
                  <NavLink to="/fastrck"><li>Fastrck</li></NavLink>   
                  <NavLink to="/firebolt"><li>Fire-Bolt</li></NavLink> 
                  <NavLink to="/sonata"><li>Sonata</li></NavLink> 
                </ul>
            )}
          </ul>
        </NavLink>
       </div>
       <div
         className="clothe-container"
         onMouseEnter={() => setIsClotheHovered(true)}
         onMouseLeave={() => setIsClotheHovered(false)} 
       >
       <NavLink to="/clothe">
          <ul type="none">
            <li>CLOTH</li>
            {isClotheHovered && (
                <ul type="none" className="menu">
                   <NavLink to="/men"><li>Men</li></NavLink> 
                   <NavLink to="/women"><li>Women</li></NavLink>  
                   <NavLink to="/baby"><li>Babys</li></NavLink>
                  </ul>
            )}
            </ul>
        </NavLink>
       </div>
        <div
              className="gym-container"
              onMouseEnter={() => setIsGymHovered(true)}
              onMouseLeave={() => setIsGymHovered(false)} 
        >
        <NavLink to="/gym">
          <ul type="none">
           <li>GYM</li> 
            {isGymHovered && (
                <ul type="none" className="menu">
               <NavLink to="/dumbbell"> <li>Dumbbell</li></NavLink> 
               <NavLink to="/barbell"><li>Barbell</li></NavLink>
               <NavLink to="/glove"><li>Gloves</li></NavLink>  
                </ul>
            )}
           
          </ul>
        </NavLink>
        </div>
        
      </nav>
      
    </div>
  );
}
