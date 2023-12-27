import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card } from "flowbite-react";
const CheckoutSuccess = () => {
  const [data,setData] = useState(null)
  const navigate = useNavigate();
  const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));

  
  const handleCreate = () => {
    const data = {
      orderType: orderDetails.orderType,
      objectService: orderDetails.packageObject._id,
      fullName: orderDetails.fullname,
      tourName: orderDetails.orderType == 'hotel' ? orderDetails.packageObject.name :  orderDetails.packageObject.title,
      tourDate: orderDetails.dateoftour,
      email: orderDetails.email,
      phone: orderDetails.phone,
      totalPersons: orderDetails.totalpersons,
      pickupTime: orderDetails.pickuptime,
      pickupLocation: orderDetails.pickuplocation,
      stripeSessionId: orderDetails.stripeSessionId,
      payment: orderDetails.totalprice,
    };
    setData(data)
    const URL = "http://localhost:8080/api/orders/create";
    axios
      .post(URL, data)
      .then((response) => {
        const data = {
          orderNo : response.data._id,
          orderType: response.data.orderType,
          objectService: response.data.objectService,
          fullName: response.data.fullName,
          tourName: response.data.tourName,
          tourDate: response.data.tourDate,
          email: response.data.email,
          phone: response.data.phone,
          totalPersons: response.data.totalPersons,
          pickupTime: response.data.pickupTime,
          pickupLocation: response.data.pickupLocation,
          stripeSessionId: response.data.stripeSessionId,
          payment: response.data.payment 
        };
        setData(data)
        const url = `http://localhost:8080/api/orders/mail/${response.data.email}`
        axios
        .post(url)
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {console.error(error)});

        updateMyPackage();
        navigate('/invoice' , {state : {data : data}});

      })
      .catch((error) => {console.error(error)});
  };
  const updateMyPackage = () => {
    const data = {
      totalCount:
        orderDetails.packageObject.totalCount - orderDetails.totalpersons,
    };
    let URL = "";
    if (orderDetails.orderType === "package") {
      URL = `http://localhost:8080/api/packages/update/${orderDetails.packageObject._id}`;
    } else if (orderDetails.orderType === "ticket") {
      URL = `http://localhost:8080/api/tickets/update/${orderDetails.packageObject._id}`;
    } else if (orderDetails.orderType === "tour") {
      URL = `http://localhost:8080/api/tours/update/${orderDetails.packageObject._id}`;
    }
    else if (orderDetails.orderType === "hotel") {
      URL = `http://localhost:8080/api/hotels/update/${orderDetails.packageObject._id}`;
    }
    else if (orderDetails.orderType === "visa") {
      URL = `http://localhost:8080/api/visas/update/${orderDetails.packageObject._id}`;
    }
    
    axios
      .post(URL, data)
      .then((response) => {})
      .catch((error) => {});
  };

  return (
    <Container>
      <Card className="transform shadow-lg rounded-lg lg:w-96 border-2 font-inter h-auto justify-center" 
        style={{boxShadow:46}}>
        <h5 className="text-center font-semibold">Checkout Successful</h5>
        <p className="text-lg text-justify ">
          Thank you for choosing Azeem Tourism! 🌟 Your order might take some
          time to process. In case of any inquiries, contact the support at{" "}
          <a
            href="mailto:azeemtourism@gmail.com"
            className="text-primary-600 font-normal"
          >
            <strong>support</strong>
          </a>{" "}
          Or you can 📞 WhatsApp us on{" "}
          <a
            href="https://api.whatsapp.com/send?phone=971522760013"
            className="text-primary-600 font-normal"
          >
            <strong>+97152760013</strong>
          </a>
          .
          
        </p>
        <p><strong>Please Make Sure to Click on Confirm Order Else We will not receive our order (yet your payment is done)</strong></p>
        <Button
          onClick={() => {
            handleCreate();
          }}
          sx={{
            fontFamily: "Inter",
            backgroundColor: "#7ec7b3",
            color: "black",
            borderRadius: "lg",
            fontSize: "lg",
            p: 1.2,
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#00A3E0",
              color: "white",
            },
          }}
        >
          Confirm Order
        </Button>

      
      </Card>
    </Container>
  );
};

export default CheckoutSuccess;

const Container = styled.div`
  min-height: 80vh;
  max-width: 850px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 0.5rem;
    color: #029e02;
  }
`;
