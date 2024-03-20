import "./Login.css";
import {Link } from "react-router-dom";
import React from "react";

export default function Login() {
 
  return (
    <>
    <div className="logcir"></div>
    <div className="loginpage">
      <img className="logipic" src="https://raw.githubusercontent.com/trananhtuat/animated-login-registration/353a7bb31a0e21f6344af06868805656476d26d3/assets/undraw_creative_team_r90h.svg" alt="" />
          <Link to="/">
            <button className="homebutton">
          <i class="fa fa-home" aria-hidden="true">
            HOME
            </i></button>
          </Link>
          <div className="login">
            <div className="drop">
            <form className="loginForm">
            <span className="loginTitle">LOGIN</span>
              <label className="ht">Email</label>
              <input
                className="loginInput"
                type="text"
                placeholder="Enter your email..."
                name="email"
              />
              <label className="ht">Password</label>
              <input
                className="loginInput"
                type="password"
                placeholder="Enter your password..."
                name="password"
              />

              <button className="loginButton">Login</button>
            </form>
            </div>

            <Link to="/Register">
              <button className="loginRegisterButton">Register</button>
            </Link>
          </div>
          </div>
      </>
  );
}



