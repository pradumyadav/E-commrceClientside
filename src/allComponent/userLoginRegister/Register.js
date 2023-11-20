

import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import "./Style.css"
export default function Register() {
  const navi = useNavigate();
  const [data, setData] = useState({
  
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
      .post("https://e-commerce-hspl.onrender.com/user/register", data)
      .then((res) => {
         alert(res.data.message);
        setData(res.data);
        localStorage.getItem("token", res.data.token);
        navi("/login");
      })
      .catch((err) => console.log(err));
    setData({
      email: "",
      password: "",
    
    });
  };
  return (
    <>
      <div>
        <h1>Register</h1>
        <br />
        <br />
        <label htmlFor="email">Email:{" "}</label>
        <input type="email" name="email" id="email" onChange={handleChange} value={data.email} required/>
        <br />
        <br />
        <label id="font" htmlFor="Password"> Set Password:{" "}</label>
        <input
          type="password" maxLength="8" name="password" id="Password" onChange={handleChange}value={data.password}required></input>
        <br />
        <br />
     
        <button  onClick={handleSubmit}> Submit</button>
        <div className="or1">OR</div>
        <NavLink to="/login">
          Go To Login Page
        </NavLink>
      </div>
    </>
  );
}






