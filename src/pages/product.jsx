import React, { useEffect, useState } from "react";
import { BASE_URL, PASSWORD, USERNAME, blackColor } from "./../../varible";
import base64 from "base-64";
import { useLogin } from "../Context/LoginProvider";

const Product = () => {
  
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //comeing from contex
  const { isLoggedIn, setIsLoggedIn } = useLogin();
  const { userDetails } = isLoggedIn;
  console.log("isLoggedIn",isLoggedIn);



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
      const result = await response.json();
      // console.log("jsonData",typeof(result));
      console.log({result});
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


  console.log("data paise",productData);

  return (
    <div>
  {/* <h1 style={{ marginBottom: '20px', color: '#333' }}>Full-Name: {userDetails?.FullName}</h1> */}

  {isLoading ? (
    <p>Loading...</p>
  ) : (
    <div style={{marginLeft:20}}>
      <h1 style={{ color:blackColor }}>Product Page</h1>
      <table style={{ width: '60%', borderCollapse: 'collapse', }}>
        <thead>
          <tr style={{ background: '#008080', color: '#fff' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Brand Name</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Product Id</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Product Code</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Pack Size</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>MRP</th>
          </tr>
        </thead>
        <tbody>
          {productData?.map((product) => (
            <tr key={product.id}>
              <td style={{ padding: '10px' }}>{product?.ProductFamilyName}</td>
              <td style={{ padding: '10px' }}>{product.ProductId}</td>
              <td style={{ padding: '10px' }}>{product.ProductCode}</td>
              <td style={{ padding: '10px' }}>{product.PackSize}</td>
              <td style={{ padding: '10px' }}>{product.MRP}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>
  );
};

export default Product;
