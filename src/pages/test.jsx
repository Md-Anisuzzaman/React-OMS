import { BASE_URL } from "../../varible";

const transformedOrderDetails = selectedProduct.map((product, index) => {
    return {
        ProductId: product.ProductId,
        Quantity: quantity[index], // You can set the desired quantity here
        UnitPrice: product.MRP, // Use the trade price or any other desired price
        Status: 0, // Set the desired status
    };
});

const fetchCreatenewOrderData = async () => {
    if (!orderQuantities || Object.keys(orderQuantities).length === 0) {
        console.log("No data in orderQuantities. Cannot submit.");
        ToastAndroid.show("No data in order details", ToastAndroid.LONG);
        return;
    }

    const requestData = {
        OrderDetails: transformedOrderDetails,
        CustomerId: data?.CustomerId,
        OrderDate: data?.OrderDate,
        DeliveryDate: data?.DeliveryDate,
        EntryBy: data?.EntryBy,
        Note: data?.Note,
        TerritoryId: data?.TerritoryId,
    };
    console.log(
        "Posting Create order Api  data:",
        JSON.stringify(requestData, null, 2)
    );
    const authHeader = ("Basic" + base64.encode(USERNAME + ":" + PASSWORD);
    try {
        const response = await fetch(
            `${BASE_URL} / api / NewOrderApi / CreateNewOrder`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authHeader,
                },
                body: JSON.stringify(requestData),
            }
        );
        console.log(response);
        if (response.status === 200) {
            const result = await response.json();
            // setOutput(result);
            console.log("this is result", JSON.stringify(result, null, 2));
            // navigation.navigate("Order Info");
            navigation.navigate("Order Info", {
                orderNo: result.OrderNo, // Pass OrderNo as a parameter
            });
            Toast.show({
                text1: result.Status,
                type: "success",
            });
        } else {
            // Handle errors here if needed
            console.error("API request failed with status code:", response.status);
            ToastAndroid.show("Failed to create order", ToastAndroid.LONG);
        }
    } catch (error) { }
};

//////////////////////////////////////////////////////////////
const fetchOrderInfoData = async () => {
    try {
        const url = `${BASE_URL}/api/NewOrderApi / GetPoInfo ? orderNo = ${orderNo}& verId=1`;
        const authHeader = "Basic " + base64.encode(USERNAME + ":" + PASSWORD);
        // Fetch data from the URL
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: authHeader,
            },
        });
        const Result = await response.json();
        console.log("order info", JSON.stringify(Result, null, 2));
        setData(Result);
    } catch (error) {
        // console.error("Fetch error:", error);
        // throw error;
    }
};

useEffect(() => {
    fetchOrderInfoData();
}, []);

const transformedOrderDetails = selectedProduct.map((product, index) => {
    return {
        ProductId: product.ProductId,
        Quantity: quantity[index], // You can set the desired quantity here
        UnitPrice: product.MRP, // Use the trade price or any other desired price
        Status: 0, // Set the desired status
    };
});