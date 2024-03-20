import "./Admin.css";
import { Link } from "react-router-dom";
import React from 'react'






export default function AdminLogin(){
    return(
      <>
      <div className="admin-page">
                <Link to="/">
            <p className="homebutton1">
          <i class="fa fa-home" aria-hidden="true">
             HOME
           </i> </p>
          </Link>
          <div className="admincir"></div>
          <div className="admincir1"></div>
          <div className="admincir2"></div>
          <div className="admincir3"></div>
          <div className="admincir4"></div>

          <img className="svgadmin" src="https://garizon.in/public/img/login.jpg" alt="admin" />
        <div className="AdminLogin">
        <form className="adminloginForm" >
        <span className="AdminloginTitle">Admin Login</span>

        <label>Email</label>
        <input className="adminloginInput" type="text"  name="email"placeholder="Enter your email..." />
        <label>Password</label>
        <input className="adminloginInput" type="password"  name="password" placeholder="Enter your password..." />
        <button className="adminloginButton">Login</button>
      </form>
        </div>
        </div>
        </>
    )
}