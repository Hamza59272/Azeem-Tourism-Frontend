import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card } from "flowbite-react";
const CheckoutSuccess = () => {
  const navigate = useNavigate();
  const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
  const handleCreate = () => {
    const data = {
      orderType: orderDetails.orderType,
      objectService: orderDetails.packageObject._id,
      fullName: orderDetails.fullname,
      tourName: orderDetails.packageObject.title,
      tourDate: orderDetails.dateoftour,
      email: orderDetails.email,
      phone: orderDetails.phone,
      totalPersons: orderDetails.totalpersons,
      pickupTime: orderDetails.pickuptime,
      pickupLocation: orderDetails.pickuplocation,
      stripeSessionId: orderDetails.stripeSessionId,
      payment: orderDetails.totalpersons * orderDetails.packageObject.price,
    };
    const URL = "https://backend.azeemtourism.com/api/orders/create";
    axios
      .post(URL, data)
      .then((response) => {
        updateMyPackage();
      })
      .catch((error) => {});
  };
  const updateMyPackage = () => {
    const data = {
      totalCount:
        orderDetails.packageObject.totalCount - orderDetails.totalpersons,
    };
    let URL = "";
    if (orderDetails.orderType === "package") {
      URL = `https://backend.azeemtourism.com/api/packages/update/${orderDetails.packageObject._id}`;
    } else if (orderDetails.orderType === "ticket") {
      URL = `https://backend.azeemtourism.com/api/tickets/update/${orderDetails.packageObject._id}`;
    } else if (orderDetails.orderType === "tour") {
      URL = `https://backend.azeemtourism.com/api/tours/update/${orderDetails.packageObject._id}`;
    }
    axios
      .post(URL, data)
      .then((response) => {})
      .catch((error) => {});
  };

  return (
    <Container>
      <Card className="transform hover:scale-110 shadow-lg rounded-lg lg:w-96 border-2 font-inter h-auto justify-center">
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
        <Button
          onClick={() => {
            handleCreate();
            navigate("/");
          }}
          sx={{
            fontFamily: "Inter",
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "lg",
            fontSize: "lg",
            p: 1.2,
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#388E3C",
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
