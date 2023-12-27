import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import axios from "axios";
const steps = ["Package Details", "Review Your Package"];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [imageFileName, setImageFileName] = useState([]);
  const [imageFileUrl, setImageFileUrl] = useState([]);
  const [videoFileName, setVideoFileName] = useState([]);
  const [videoFileUrl, setVideoFileUrl] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isDiscounted,setisDiscounted] = useState(false);
  const [discount,setDiscount]= useState(0);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [region , setRegion] = useState("")
  const [state, setState] = useState("");
  const [zip, setZip] = useState(0);
  const [country, setCountry] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [error, seterror] = React.useState("");
  const [imagesList, setImagesList] = useState([]);
  const [videosList, setVideosList] = useState([]);
  const handleNext = () => {
    // if ((/^[ A-Za-z0-9_@./#&+-,]+$/).test(imageFileName) && (/^[ A-Za-z0-9_@./#&+-,]+$/).test(videoFileName) && (/^[ A-Za-z0-9_@./#&+-,]+$/).test(title) && (/^[ A-Za-z0-9_@./#&+-,]*$/).test(desc) && (/^[ A-Za-z0-9_@./#&+-,]*$/).test(address) && (/^[ A-Za-z0-9_@./#&+-,]*$/).test(city) && (/^[ A-Za-z0-9_@./#&+-,]+$/).test(state) && (/^[ A-Za-z0-9_@./#&+-,]+$/).test(zip)&& (/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/).test(imageFileUrl) && (/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/).test(videoFileUrl) && (/^[ A-Za-z0-9_@./#&+-,]+$/).test(country) && (/^[ A-Za-z0-9_@./#&+-,]+$/).test(price) ) {
    if (
      imageFileName.length == 0 ||
      // videoFileName.length == 0 ||
      title.length == 0 ||
      desc.length == 0 ||
      address.length == 0 ||
      city.length == 0 ||
      state.length == 0 ||
      zip.length == 0 ||
      country.length == 0 ||
      totalCount.length == 0 ||
      price.length == 0
    ) {
      seterror("Kindly Fill All The Fields !!! ");
    } else {
      imageFileUrl.map((item) => {
        setImagesList((imagesList) => [...imagesList, { image: item }]);
      });
      videoFileUrl.map((item) => {
        setVideosList((videosList) => [...videosList, { video: item }]);
      });
      seterror("");
      setActiveStep(activeStep + 1);
    }
    // }
    // else{
    //   seterror('Invalid Entries !!!');
    // }
    // setActiveStep(activeStep + 1);
  };

  const postMyTour = () => {
    const data = {
      title: title,
      description: desc,
      address: address,
      city: city,
      state: state,
      zip: zip,
      country: country,
      images: imagesList,
      videos: videosList,
      totalCount: totalCount,
      price: price,
      isDiscounted:isDiscounted,
      Discount: discount,
      active: true,
      region: region,
      milestone: [{}],
    };
    const URL = "http://localhost:8080/api/tours/create";
    axios
      .post(URL, data)
      .then((response) => {
        // window.location.reload()
      })
      .catch((error) => {
        // event.preventDefault();
      });
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressForm
            title={title}
            setZip={setZip}
            zip={zip}
            country={country}
            setCountry={setCountry}
            desc={desc}
            address={address}
            setState={setState}
            setCity={setCity}
            state={state}
            city={city}
            setDesc={setDesc}
            setTitle={setTitle}
            setAddress={setAddress}
            setVideoFileUrl={setVideoFileUrl}
            videoFileUrl={videoFileUrl}
            videoFileName={videoFileName}
            setVideoFileName={setVideoFileName}
            setImageFileName={setImageFileName}
            imageFileName={imageFileName}
            setImageFileUrl={setImageFileUrl}
            imageFileUrl={imageFileUrl}
            totalCount={totalCount}
            setTotalCount={setTotalCount}
            price={price}
            setPrice={setPrice}
            setRegion={setRegion}
            region = {region}
            isDiscounted ={isDiscounted}
            discount={discount}
            setisDiscounted={setisDiscounted}
            setDiscount={setDiscount}
          />
        );
      case 1:
        return (
          <Review
            title={title}
            zip={zip}
            country={country}
            desc={desc}
            address={address}
            state={state}
            city={city}
            videoFileUrl={videoFileUrl}
            imageFileName={imageFileName}
            imageFileUrl={imageFileUrl}
            videoFileName={videoFileName}
            price={price}
            region = {region}
            totalCount={totalCount}
            discount={discount}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Your Tour Has Been Created
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography style={{ color: "red" }} variant="subtitle1">
                  {error}
                </Typography>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                {activeStep === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    onClick={() => {
                      postMyTour();
                      handleNext();
                    }}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {" "}
                    Create Tour
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {" "}
                    Next
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
