import React, { useState } from "react";
import "../styless/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL, PASSWORD, USERNAME } from "./../../varible";
import base64 from "base-64";
import axios from "axios";
import { useLogin } from "../Context/LoginProvider";

const Login = () => {


  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { isLoggedIn, setIsLoggedIn } = useLogin();
  // console.log({ isLoggedIn })

  // Hook for navigation
  const navigate = useNavigate(); 

  // console.log("userId", userId);
  // console.log("password", password);

  //error handleing
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  // const handleLogin = async () => {
  //   try {
  //     const credentials = `${USERNAME}:${PASSWORD}`;
  //     //http://103.209.40.121:6565http://103.209.40.121:6565
  //     const base64Credentials = btoa(credentials);
  //     // const authHeader ="Basic"+base64.encode(USERNAME + ":" + PASSWORD);
  //     const apiUrl = "api/HomeApi/Login";
  //     const queryParams = `networkId=${userId}&password=${password}`;
  //     console.log("hi there");
  //     // console.log("userId", userId);
  //     // console.log("password", password);

  //     const response = await fetch(`${apiUrl}?${queryParams}`, {
  //       method: "POST",
  //       credentials: "include",
  //       headers: {
  //         Authorization: `Basic ${base64Credentials}`,
  //         "Access-Control-Allow-Origin": "(*)",
  //         "Content-Type": "application/json",
  //       },

  //       // mode: 'no-cors',

  //     });
  //     const result = await response.json();
  //     console.log("apiUrl", apiUrl);
  //     // const response = await axios.post(`${apiUrl}?${queryParams}`, null, {
  //     //   headers: {
  //     //     Authorization: `Basic ${base64Credentials}`,
  //     //     'Content-Type': 'application/json',
  //     //   },
  //     // });

  //     if (result?.EmpId) {
  //       localStorage.setItem("userData", JSON.stringify(result));
  //       console.log("Login successful!", result.data);
  //       setIsLoggedIn((prevUserDetails) => ({
  //         ...prevUserDetails,
  //         login: true,
  //         userDetails: result,

  //       }));
  //       navigate("/home");
  //     } else {
  //       alert("Username and Password did not match");
  //       console.error("Login failed. Please check your credentials.");
  //       // Handle unsuccessful login
  //       setError(errorMessage);
  //     }
  //   } catch (error) {
  //     console.error("Login error:", error.message);
  //   }
  // };





  const handleLogin = async () => {
    try {
      setIsLoading(true); // Start loading
      const authHeader = "Basic " + base64.encode(USERNAME + ":" + PASSWORD);
      const response = await fetch(
        `${BASE_URL}/api/HomeApi/Login?networkId=${userId}&password=${password}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authHeader,
          },
        }
      );
      const result = await response.json();
      // setloginResponse(result);
      // console.log("API response:", result);
      setIsLoading(false);
      // Stop loading
      // console.log('this is login details', result.EmployeeId);
      if (result?.EmpId) {
        localStorage.setItem("userData", JSON.stringify(result));
        console.log("Login successful!", result.data);
        setIsLoggedIn((prevUserDetails) => ({
          ...prevUserDetails,
          login: true,
          userDetails: result,

        }));
        navigate("/home");
      } else {
        alert("Username and Password did not match");
        console.error("Login failed. Please check your credentials.");
        // Handle unsuccessful login
        setError(errorMessage);
      }

    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (

    <div style={{}}>
      <h1 style={{ color: "blue", textAlign: "center" }}>Welcome to OMS</h1>
      {/* <h1 classNameName='check'>check </h1> */}
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          {/* <a >Login</a> */}
        </form>
        <br />
        <button onClick={handleLogin} type="button" className="btn btn-info">
          Login
        </button>
        <p>
          Don't have an account?
          <span className="register">
            {" "}
            <Link to="/register">Register</Link>
          </span>
        </p>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;

// if (response.EmpId) {
//   setIsLoggedIn((prevUserDetails) => ({
//     ...prevUserDetails,
//     login: true,
//     userDetails: response,
//   }));

// } else {
//   const errorMessage = response;
//   setError(errorMessage);
//   console.log("errorMessage", errorMessage);
// }
