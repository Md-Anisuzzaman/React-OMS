import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BASE_URL, PASSWORD, USERNAME, blackColor } from "./../../varible";
import base64 from "base-64";
import ProductTable from "../Component/ProductTable";
import { Link, useLocation } from "react-router-dom";

import SeletedProduct from './../Component/SeletedProduct';



const OrderDetails = () => {
  const location = useLocation();
  const requestData = location.state?.requestData;
  console.log("requestData",requestData);

  const [showProductData, setShowProductData] = useState(true);
  const [showOrderData, setShowOrderData] = useState(false);
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  

  // console.log({ productData });


  const handleProductButtonPress = () => {
    setShowProductData(true);
    setShowOrderData(false);
  };

  const handleOrderButtonPress = () => {
    setShowProductData(false);
    setShowOrderData(true);
  };

  const fetchProductDatax = async () => {
    try {
      const authHeader = "Basic " + base64.encode(USERNAME + ":" + PASSWORD);
      const response = await fetch(`${BASE_URL}/api/ProductApi/GetAllProduct`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
      });
      const result = await response.json();;
      setProductData(result)
      setIsLoading(false);
      // return jsonData;
    } catch (error) {
      console.error("Error fetching data:", error);

    }
  }

  useEffect(() => {
    fetchProductDatax();
  }, []);



  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Order Details</h3>

      <div
        style={{
          display: "flex",
          gap: 5,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <Button variant="contained">Product List</Button>
        <Link to="/selectedproduct"><Button variant="contained">Order Lists</Button></Link>
      </div>

      <ProductTable Products={productData} />


    </div>
  );
};

export default OrderDetails;

//  first  need two button
//fetch product data with a qty box
//those selected qty box was show in orderDetails
//orderDetails have submit button
