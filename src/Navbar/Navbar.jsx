import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">PICTURESQUE</div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Aboutus">
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <ul className="topList">
          <li className="topListItem1">
            <Link className="link" to="/Login">
              <button className="log" style={{ "--clr": "#1e9bff" }}>
                <span>LOGIN</span>
                <i></i>
              </button>
            </Link>
          </li>
          <li className="topListItem1">
            <Link className="link" to="/Register">
              <button className="log" style={{ "--clr": "#6eff3e" }}>
                <span>REGISTER</span>
                <i></i>
              </button>
            </Link>
          </li>
          <li className="topListItem1">
            <Link className="link" to="/AdminLogin">
              <button className="log" style={{ "--clr": "#ff1867" }}>
                <span>ADMINLOGIN</span>
                <i></i>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
