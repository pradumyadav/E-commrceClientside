

import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import "./Style.css"
export default function Register() {
  const navi = useNavigate();
  const [data, setData] = useState({
    name:"",
    email: "",
    password: "",
    
  
  });
  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
    // .post("http://localhost:4001/user/register", data)
      .post("https://e-commerce-hspl.onrender.com/user/register", data)
      .then((res) => {
        alert(res.data.message);
     
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name",res.data.name)
      
        navi("/login");
      })
      .catch((err) => {
        console.log(err);
      
      });
   
    setData({
      name: "",
      email: "",
      password: "",
    });
  };
  
  return (
    <>
      <div className="loginParent">
        <h1>Register</h1>
        <br />
        <br />
        <label className="word" htmlFor="name">Name{" "}</label>
        <input  className="text" type="text" name="name" id="name" onChange={handleChange} value={data.name} required/>
        <br />
        <br />
        <label className="word" htmlFor="email">Email:{" "}</label>
        <input  className="text" type="email" name="email" id="email" onChange={handleChange} value={data.email} required/>
        <br />
        <br />
        <label className="word" id="font" htmlFor="Password"> Set Password:{" "}</label>
        <input
          className="text" type="password" maxLength="8" name="password" id="Password" onChange={handleChange}value={data.password}required></input>
        <br />
        <br />
     
        <button  className="btn1"onClick={handleSubmit}> Submit</button>
        <div className="or1">OR</div>
        <NavLink to="/login">
          Go To Login Page
        </NavLink>
      </div>
    </>
  );
}






