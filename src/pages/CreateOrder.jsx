import React, { useEffect, useState } from "react";
import { useLogin } from "../Context/LoginProvider";
import base64 from "base-64";
import { USERNAME, PASSWORD, BASE_URL } from "./../../varible";

import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";


import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getData } from "../utils/utils";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar } from "react-icons/fa";

import "../styless/CreateOrder.css"

const CreateOrder = () => {
  // const user = localStorage.getItem("userData");
  // console.log({ user });
  // const userData = JSON.parse(user);
  // const territoryId = userData.TerritoryId;
  // console.log(territoryId);

  const theme = useTheme();

  const [customerData, setCustomerData] = useState();
  const [selectedData, setSelectedData] = useState([]);
  const [orderDate, setOrderDate] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [note, setNote] = useState("");

  // console.log({ customerData });
  //   console.log({ selectedData });
  // console.log({ note });
  // console.log({ orderDate });
  // console.log("getData", getData());

  // const data = getData();
  // console.log( "Data paise ",data.TerritoryId);
  //console.log("userDetails", { userDetails });

  //   console.log("orderDate",orderDate);
  //   console.log("deliveryDate",deliveryDate);
  //   console.log({ note });

  //comeing from contex
  const { isLoggedIn, setIsLoggedIn } = useLogin();
  const { userDetails } = isLoggedIn;

  function getStyles(name, customerData, theme) {
    return {
      fontWeight:
        customerData.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChange = (event) => {
    setSelectedData(event.target.value);
  };



  const fetchCustomerData = async () => {
    try {
      const authHeader = "Basic " + base64.encode(USERNAME + ":" + PASSWORD);
      const apiUrl = `${BASE_URL}/api/CustomerApi/GetAllCustomer?territoryId=${userDetails?.TerritoryId}`;
      //   console.log("API URL:", apiUrl);
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: authHeader,
        },
      });

      const result = await response.json();
      console.log(JSON.stringify("fetch json data  ", result, null, 2));
      setCustomerData(result);
      // return jsonData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCustomerData();
  }, []);

  const requestData = {
    CustomerId: selectedData,
    OrderDate: orderDate,
    DeliveryDate: deliveryDate,
    EntryBy: userDetails?.EmpId,
    Note: note,
    TerritoryId: userDetails?.TerritoryId,
  };
  console.log("requestData paise", requestData);

  return (
    <div className="CorderBody">

      <h3 className="nextButton">Create Order</h3>
      <br />
      <div style={{ alignSelf: "center" }}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Name"
              value={selectedData}
              onChange={handleChange}
            >
              {customerData?.map((item) => (
                <MenuItem
                  value={item.CustomerId}
                  style={getStyles(item, selectedData, theme)}
                >
                  {item?.Name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>

  <div>

    <DatePicker
      selected={orderDate}
      onChange={(date) => setOrderDate(date)}
      dateFormat="dd/MM/yyyy"
      placeholderText="Select Order Date"
      className="order-date"
    />


    <DatePicker
      selected={deliveryDate}
      onChange={(date) => setDeliveryDate(date)}
      dateFormat="dd/MM/yyyy"
      placeholderText="Select Delivery Date"
      className="order-date"
    />
  </div>

      <div className="nextButton"> 
      <Button variant="contained"  color="success" size="large">Next</Button>
      </div>


      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <form>
          <h3>Create Order</h3>
          <br />
          <div style={{ alignSelf: "center" }}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Name</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Name"
                  value={selectedData}
                  onChange={handleChange}
                >
                  {customerData?.map((item) => (
                    <MenuItem
                      value={item.CustomerId}
                      style={getStyles(item, selectedData, theme)}
                    >
                      {item?.Name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>
          <br />
          <div>
            <DatePicker
              selected={orderDate}
              onChange={(date) => setOrderDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Order Date"
            />
            <br />
            <br />
            <DatePicker
              selected={deliveryDate}
              onChange={(date) => setDeliveryDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Delivery Date"
            // showIcon
            />
          </div>
          <br />
          <div className="form-group" style={{ alignSelf: "center" }}>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Note"
              value={note}
              onChange={(event) => {
                setNote(event.target.value);
              }}
              style={{ backgroundColor: "#b2dfdb" }}
            />
          </div>
          <br />
          <Button variant="contained">Next</Button>
        </form>
      </div> */}


    </div>
  );
};

export default CreateOrder;




// const fetchCustomerData = async () => {
//   try {
//     const credentials = `${USERNAME}:${PASSWORD}`;
//     const base64Credentials = btoa(credentials);
//     const apiUrl = "api/CustomerApi/GetAllCustomer";
//     const queryParams = `territoryId=${userDetails?.TerritoryId}`;
//     // const queryParams = `territoryId=${user?.TerritoryId}`;
//     console.log("queryParams", { queryParams });

//     // const queryParams = 'territoryId=46';
//     const response = await fetch(`${apiUrl}?${queryParams}`, {
//       method: "GET",
//       credentials: "include",
//       headers: {
//         Authorization: `Basic ${base64Credentials}`,
//         "Access-Control-Allow-Origin": "*",
//         "Content-Type": "application/json",
//       },
//     });
//     console.log("response", response);
//     const result = await response.json();
//     // console.log("result", result);
//     setCustomerData(result);
//   } catch (error) {
//     console.log(error);
//   }
// };