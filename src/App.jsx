// App.jsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Product from './pages/product';
import CreateOrder from './pages/CreateOrder';
import { useLogin } from "./Context/LoginProvider";
import Customer from './pages/Customer';
import OrderDetails from './pages/OrderDetails';
import SeletedProduct from "./Component/SeletedProduct";

const App = () => {

  // const user = window.localStorage.getItem("userData");
  // console.log({ user });

  const { isLoggedIn, setIsLoggedIn } = useLogin();
  const { userDetails } = isLoggedIn;
  // console.log("userDetails",userDetails);

  // useEffect(() => {
  //   if (user) {
  //     setIsLoggedIn({
  //       logIn: true,
  //       userDetails: JSON.parse(window.localStorage.getItem("userData")),
  //     });
  //   }
  // }, []);

  useEffect(() => {
    setIsLoggedIn({
      logIn: true,
      userDetails: JSON.parse(window.localStorage.getItem("userData")),
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/createOrder" element={<CreateOrder />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/orderDetails" element={<OrderDetails />} />
        <Route path="/selectedproduct" element={<SeletedProduct />} />
      </Routes>
    </Router>
  );
};

export default App;



{/* <Router>
  <LoginProvider>
   
      {user ? (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/createOrder" element={<CreateOrder />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      )}
    </Routes>      
  </LoginProvider>
</Router> */}
