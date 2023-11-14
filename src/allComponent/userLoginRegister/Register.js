

import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
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
      .post("http://localhost:4001/user/register", data)
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
      <div className="center1">
        <h1 id="heading">Register</h1>
    
        <br />
        <br />
        <label id="font" htmlFor="email">
          Email:{" "}
        </label>
        <input
          className="text2"
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={data.email}
          required
        />
        <br />
        <br />
        <label id="font" htmlFor="Password">
          Set Password:{" "}
        </label>
        <input
          className="text3"
          type="password"
          maxLength="8"
          name="password"
          id="Password"
          onChange={handleChange}
          value={data.password}
          required
        ></input>
        <br />
        <br />
     
        <button className="button1" onClick={handleSubmit}>
          Submit
        </button>
        <div className="or1">OR</div>
        <NavLink to="/login" className="nextpage1">
          Go To Login Page
        </NavLink>
      </div>
    </>
  );
}






