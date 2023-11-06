import React, { useState } from "react";
import "./Header.css";
import basketImg from "../img/add-to-cart.png";
import { NavLink } from "react-router-dom";

export default function Header() {
    
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const[isMobileHovered,setIsMobileHovered]=useState(false)
  const[isClotheHovered,setIsClotheHovered]=useState(false)
  const[isFurnitureHovered,setIsFurnitureHovered]=useState(false)
  const[isWatchHovered,setIsWatchHovered]=useState(false)
  const[isGymHovered,setIsGymHovered]=useState(false)

  return (
    <div>

      <div className="top1">
        <div className="logo">1</div>
        <div className="search_Bar"></div>
        <button className="basket">
          <img className="basket_Img" src={basketImg} alt="Not Found" />
        </button>
        <div className="sign_In">
          <button>Sign In</button>
        </div>
      </div>


      <nav className="nav2">
        <div
          className="home-container"
          onMouseEnter={() => setIsHomeHovered(true)}
          onMouseLeave={() => setIsHomeHovered(false)}
        >
          <NavLink to="/">
            <ul  type="none">
              <li><h4>HOME</h4></li>
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

            <li><h4>MOBILE</h4></li>
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
            <li><h4>FURNITURE</h4></li>

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
            <li><h4>WATCH</h4></li>
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
            <li><h4>CLOTHE</h4></li>
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
            <li><h4>GYM</h4></li>
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
