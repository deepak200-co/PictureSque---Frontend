import "./Register.css";
import { Link } from "react-router-dom";
import Regpic from "../img/Regpic.jpg";
function Register() {

  return (
    <div className="registration">
      <div className="reg"></div>
        <div>
          <h2 className="registermain">Join with us</h2>
          <p className="sufi">heartly thankful to join our club</p>
          <img className="Regim" src={Regpic} alt="img" />
          <center>
            <div className="div1">
              <center>
                <div className="drop5">
                  <form
                    className="registrationForm"
                   
                  >
                    <label className="registrationTitle">REGISTER</label>
                    <label className="registrationitem">
                      Username :&nbsp;
                      <input
                        className="registrationInput"
                        type="text"
                        name="username"
                        placeholder="Your username..."
                        
                      />
                    </label>
                    <label className="registrationitem">
                      Email :&nbsp;
                      <input
                        className="registrationInput"
                        type="text"
                        placeholder="Enter your email..."
                        name="email"
                        
                      />
                    </label>
                    <label className="registrationitem">
                      Password :&nbsp;
                      <input
                        className="registrationInput"
                        type="password"
                        placeholder="Enter your password..."
                        name="password"
                        
                      />
                    </label>
                    <label className="registrationitem">
                      Phone number :&nbsp;
                      <input
                        className="registrationInput"
                        type="text"
                        placeholder="Enter your mobile number..."
                        name="phnumber"
                        
                      />
                    </label>
                    <label className="registrationitem">
                      Picture :&nbsp;
                      <input
                        className="registrationInput"
                        id="picture"
                        type="text"
                        name="picture"
                      />
                    </label>
                    <button className="registrationButton">Register</button>
                  </form>
                </div>
                <Link to="/Login">
                  <button className="registrationLoginButton">Login</button>
                </Link>
                <Link to="/">
                  <button className="homeLoginButton">Home</button>
                </Link>
              </center>
            </div>
          </center>
        </div>
    </div>
  );
}
export default Register;

