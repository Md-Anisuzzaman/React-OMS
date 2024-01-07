import base64 from "base-64";
import { BASE_URL, PASSWORD, USERNAME } from "../../varible";
import axios from 'axios';



// export const fetchProductData = async ( setIsLoading) => {
//   try {
//     const authHeader = "Basic " + base64.encode(USERNAME + ":" + PASSWORD);
//     const response = await fetch(`${BASE_URL}/api/ProductApi/GetAllProduct`, {
//       headers: {
//         Authorization: authHeader,
//       },
//     });
//     const jsonData = await response.json();
   
//     return jsonData;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     setIsLoading(false);
//     // setIsLoading(false);
//     throw error;
//   }
// };




export const fetchProductDatax = async (setIsLoading)=> {
   try {
    const credentials = `${USERNAME}:${PASSWORD}`;
    const base64Credentials = btoa(credentials);
    const apiUrl ='api/api/ProductApi/GetAllProduct'
     
     const response =await fetch (`${apiUrl}`,{
      method: 'GET',
      credentials: 'include',
      headers: {
        Authorization: `Basic ${base64Credentials}`,
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
      },
     })

     console.log("response",response);

     if (response.status === 200) {
      console.log('Product fetch successfully!', response.data);
      // Perform any additional actions after successful login
    } else {
      console.error('Product not fetch successfully');
      // Handle unsuccessful login (show error message, etc.)
    }
    
   } catch (error) {
    setIsLoading(false);
    console.error('An error occurred during fetch-Product:', error.message);

   }
   
}