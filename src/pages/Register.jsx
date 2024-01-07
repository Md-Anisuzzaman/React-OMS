import React from "react";
import "../styless/Register.css";
import { Link } from "react-router-dom";

function Register() {



  return (  
    <div style={{}}>
      <h1 style={{ color: "blue", textAlign: "center" }}>Welcome to OMS</h1>
      {/* <h1 className='check'>check </h1> */}
      <div class="login-box">
        <h2>Register</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>User Id </label>
          </div>

          <div class="user-box">
            <input type="" name="" required="" />
            <label>Moble</label>
          </div>

          <div class="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <a>Register</a>
        </form>
        <p>
          Already have an account?
          <span className="register">
            {" "}
            <Link to="/Login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
