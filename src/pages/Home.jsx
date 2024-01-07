import React from "react";
import { useLogin } from "../Context/LoginProvider";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Customer from "./Customer";
import Header from "../Component/Header";

const Home = () => {
  const navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn } = useLogin();
  const { userDetails } = isLoggedIn;
  // console.log("isLoggedIn", isLoggedIn);
  // console.log("userDetails", userDetails);

  const handleCreateOrderClick = () => {
    navigate("/createOrder");
  };

  const handleProduct = () => {
    navigate("/product");
  };

  const Customer = () => {
    navigate("/customer");
  };

  return (
    
    <div>
      <div className="row">
        <Header />

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h1>Home Page</h1>
          <h2>User Details</h2>

          <h3>Full-Name:{userDetails?.FullName}</h3>
          <h3>Emp-Code:{userDetails?.EmpCode}</h3>
          <h3>Email:{userDetails?.Email}</h3>
          <h3>Territory-Id:{userDetails?.TerritoryId}</h3>
        </main>
      </div>

      <div
        style={{
          display: "flex",
          gap: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" onClick={handleCreateOrderClick}>
          Create order
        </Button>
        <Button variant="contained" onClick={handleProduct}>
          Product List
        </Button>
        <Button variant="contained" onClick={Customer}>
          Customer List
        </Button>
      </div>
    </div>
  );
};

export default Home;
