/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React, { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { useParams } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { IoPricetagsOutline } from "react-icons/io5";
import { Carousel } from "react-carousel-minimal";
import { Formik, Form, useField } from "formik";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

const PackageDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [packagesData, setPackagesData] = useState([]);
  const [packageObject, setPackageObject] = useState();

  useEffect(() => {
    const URL = "https://backend.azeemtourism.com/api/tickets/get";
    axios
      .get(URL)
      .then((response) => {
        const filtered = response.data.filter(
          (packages) => packages.active === true,
        );
        setPackagesData(filtered);
        setPackageObject(filtered.find((tickets) => tickets._id === slug));
        filtered.find((tickets) => tickets._id === slug);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validationSchema = Yup.object({
    full_name: Yup.string()
      .matches(
        /^[a-zA-Z0-9_ ]*$/,
        "Username can only contain letters, numbers, underscores, and spaces",
      )
      .required("Required"),
    total_persons: Yup.number()
      .min(1, "Total persons cannot be less than 1")
      .required("Required"),
    date_of_tour: Yup.date().required("Required"),
    pickup_time: Yup.string().required("Required"),
    user_email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    user_phone: Yup.string().required("Required"),
    pickup_location: Yup.string().required("Required"),
  });
  const initialValues = {
    full_name: "",
    total_persons: 1,
    date_of_tour: "",
    pickup_time: "",
    user_email: "",
    user_phone: "",
    pickup_location: "",
  };
  const handleCheckout = async (values) => {
    const {
      full_name,
      total_persons,
      date_of_tour,
      pickup_time,
      user_email,
      user_phone,
      pickup_location,
    } = values;
    axios
      .post(`https://backend.azeemtourism.com/api/payments/intent`, {
        packageCharges: packageObject.price * total_persons,
      })
      .then((response) => {
        localStorage.setItem(
          "orderDetails",
          JSON.stringify({
            fullname: full_name,
            email: user_email,
            phone: user_phone,
            pickuplocation: pickup_location,
            totalpersons: total_persons,
            dateoftour: date_of_tour,
            pickuptime: pickup_time,
            totalprice: packageObject.price * total_persons,
            packageObject: packageObject,
            stripeSessionId: response.data.sessionID,
            orderType: "ticket",
          }),
        );
        if (response.data) {
          window.location.href = response.data.sessionURL;
        }
      })
      .catch((err) => console.log(err.message));
  };
  const InputTextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="mb-4 flex-col">
        <label className="block text-zinc-800 text-sm font-semibold mb-2 font-inter">
          {label}
        </label>
        <input
          {...field}
          {...props}
          className={`appearance-none border ${
            meta.touched && meta.error ? "border-red-500" : "border-gray-300"
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        />
        {meta.touched && meta.error ? (
          <p className="text-red-500 text-sm font-semibold ">
            {"*"}
            {meta.error}
          </p>
        ) : null}
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center px-5 lg:px-0">
        {packageObject && (
          <div className="w-full  lg:w-5/6 lg:justify-center  ">
            <h2 className="py-5 text-2xl lg:py-10 lg:text-3xl font-bold font-inter text-zinc-800 text-center">
              {packageObject.title}
            </h2>
            <div className="flex flex-col lg:flex-row lg:gap-x-10 justify-center">
              <div className="w-full justify-center ">
                <div className="flex justify-center">
                  <Carousel
                    data={packageObject.images}
                    time={3000}
                    radius="8px"
                    slideNumber={true}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    slideBackgroundColor="white"
                    slideImageFit="cover"
                    thumbnails={true}
                  />
                </div>
                <div className="pt-5">
                  <h5 className="font-inter font-semibold text-md text-left">
                    How the tour will look like?
                  </h5>
                  <p className="font-inter">{packageObject.description}</p>
                </div>
                <div className="flex ">
                  <p className="flex text-xl font-inter font-semibold mt-1 gap-x-2">
                    <IoPricetagsOutline className="mt-1" />
                    Price: $
                  </p>
                  <span className="font-inter font-bold text-xl mt-1">
                    {packageObject.price}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    {packageObject.price}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    Available Tickets {packageObject.totalCount}
                  </span>
                </div>
              </div>
              <div className="w-full lg:w-2/5 ">
                <h5 className="font-bold text-center font-inter">
                  Recent Packages
                </h5>
                {packagesData.map((item, index) => (
                  <Card
                    key={item.id}
                    imgSrc={item.images[0].image}
                    className="mb-5 shadow-sm"
                  >
                    <div className="">
                      <p className="font-semibold text-center text-xl">
                        {packagesData[index].title}
                      </p>
                      <Button
                        onClick={() => {
                          setPackageObject(packagesData[index]);
                          //navigate(`/tickets/${packagesData[index].title}`);
                        }}
                        className="shadow-sm  bg-zinc-100  text-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors duration-100  text-sm font-medium text-center rounded-lg bg-primary-700 w-full"
                      >
                        View
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center p-5 lg:pb-5">
        <div className="title">
          <h2 className="py-5 text-3xl lg:py-10 lg:text-4xl font-bold font-inter text-zinc-800 text-center">
            Get your slots booked!
          </h2>
        </div>
        <div className=" flex flex-col justify-center gap-y-10 w-full md:w-2/5">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnBlur={true}
            validateOnChange={false}
            onSubmit={(values, { resetForm }) => {
              handleCheckout(values);
              resetForm();
            }}
          >
            <Form className="border-2 bg-white shadow-lg rounded px-4 md:px-8 pt-6 pb-8 mb-4">
              <InputTextField
                label="Full Name"
                name="full_name"
                type="text"
                className="mb-4"
              />
              <InputTextField
                label="Number Of Persons"
                name="total_persons"
                type="number"
                className="mb-4"
              />
              <InputTextField
                label="Date of Tour"
                name="date_of_tour"
                type="datetime-local"
                className="mb-4"
              />
              <InputTextField
                label="Pickup Time"
                name="pickup_time"
                type="time"
                className="mb-4"
              />
              <InputTextField
                label="Email"
                name="user_email"
                type="email"
                className="mb-4"
              />
              <InputTextField
                label="Phone"
                name="user_phone"
                type="tel"
                className="mb-4"
              />
              <InputTextField
                label="Pickup Location"
                name="pickup_location"
                type="text"
                className="mb-4"
              />
              <div className=" flex justify-center mt-5">
                <Button
                  type="submit"
                  className="shadow-sm  lg:w-48 bg-zinc-100  text-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors duration-100  text-sm font-medium text-center rounded-lg bg-primary-700 w-full"
                >
                  Proceed
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
        <FloatingWhatsApp
          phoneNumber="+971522760013"
          chatMessage=""
          messageDelay="1"
          accountName="Azeem Tourism"
        />
      </div>
    </>
  );
};

export default PackageDetails;
