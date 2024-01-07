import React, { useEffect, useState } from "react";
import base64 from "base-64";
import { useLogin } from "../Context/LoginProvider";
import { BASE_URL, PASSWORD, USERNAME, blackColor } from "./../../varible";
import "../styless/Customer.css";

const Customer = () => {
  
  const [customerData, setCustomerData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  console.log({ customerData });

  //comeing from contex
  const { isLoggedIn, setIsLoggedIn } = useLogin();
  const { userDetails } = isLoggedIn;

  const fetchCustomerData = async () => {
    try {
      const authHeader = "Basic " + base64.encode(USERNAME + ":" + PASSWORD);
      const apiUrl = `${BASE_URL}/api/CustomerApi/GetAllCustomer?territoryId=${userDetails?.TerritoryId}`;
      // console.log("API URL:", apiUrl);
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: authHeader,
        },
      });

      const result = await response.json();
      console.log({ result });
      setCustomerData(result);
      setIsLoading(false);
      // return jsonData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCustomerData();
  }, []);

  return (
    <div className="centered-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1 style={{ color: blackColor }}>Customer Page</h1>
          <table
            style={{
              width: "60%",
              borderCollapse: "collapse",
              textAlign: "center",
            }}
          >
            <thead>
              <tr className="table-header">
                <th className="table-cell">Customer Name</th>
                <th className="table-cell">Customer Id</th>
                <th className="table-cell">Depot Name</th>
                <th className="table-cell">Customer-Address</th>
              </tr>
            </thead>
            <tbody>
              {customerData?.map((item) => (
                <tr key={item.id}>
                  <td style={{ padding: "10px" }}>{item?.Name}</td>
                  <td style={{ padding: "10px" }}>{item?.CustomerId}</td>
                  <td style={{ padding: "10px" }}>{item?.DepotName}</td>
                  <td style={{ padding: "10px" }}>{item?.Address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Customer;
