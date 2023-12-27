/* eslint-disable react/prop-types */
import { IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import CollectionsIcon from "@mui/icons-material/Collections";
import InputLabel from '@material-ui/core/InputLabel';
import Button from "@mui/material/Button";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

export default function HotelForm({
  title,
  setZip,
  zip,
  country,
  setCountry,
  desc,
  address,
  setState,
  setCity,
  state,
  city,
  setDesc,
  setTitle,
  setAddress,
  // setVideoFileUrl,
  // videoFileUrl,
  // setVideoFileName,
  // videoFileName,
  setImageFileName,
  imageFileName,
  setImageFileUrl,
  imageFileUrl,
  totalCount,
  setTotalCount,
  price,
  setPrice,
  setRegion,
  region,
  isDiscounted,
  discount,
  setisDiscounted,
  setDiscount
}) {

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleCheckboxChange = () => {
    setisDiscounted(!isDiscounted); 
  };
  
  const handleUploadImage = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dhhjr3vim",
        uploadPreset: "nnitbvl3",
      },
      (error, result) => {
        console.log("rs", result);
        if (!error && result && result.event === "success") {
          console.log("ue");
          setImageFileName((imageFileName) => [
            ...imageFileName,
            result.info.original_filename,
          ]);
          setImageFileUrl((imageFileUrl) => [...imageFileUrl, result.info.url]);
        }
      },
    );
    widget.open();
  };
  const handleUploadVideo = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dhhjr3vim",
        uploadPreset: "nnitbvl3",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setVideoFileName((videoFileName) => [
            ...videoFileName,
            result.info.original_filename,
          ]);
          setVideoFileUrl((videoFileUrl) => [...videoFileUrl, result.info.url]);
        }
      },
    );
    widget.open();
  };
  const handleRemoveItemImage = (name, url) => {
    setImageFileName(imageFileName.filter((item) => item !== name));
    setImageFileUrl(imageFileUrl.filter((item) => item !== url));
  };
  // const handleRemoveItemVideo = (name, url) => {
  //   setVideoFileName(videoFileName.filter((item) => item !== name));
  //   setVideoFileUrl(videoFileUrl.filter((item) => item !== url));
  // };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <>
          <Grid item xs={12} sm={12}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <label htmlFor="icon-button-file">
                <IconButton
                  onClick={() => {
                    handleUploadImage();
                  }}
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <Button
                    style={{ width: "350px" }}
                    variant="contained"
                    sx={{ p: 1, bg: "#27272a" }}
                    endIcon={<CollectionsIcon />}
                  >
                    Upload Images
                  </Button>
                </IconButton>
                {imageFileName.map((item, index) => {
                  return imageFileName ? (
                    <div className="flex justify-between ">
                      <a
                        className="text-black"
                        target="_blank"
                        href={imageFileUrl[index]}
                        rel="noreferrer"
                      >
                        <p>Uploaded Images: {item}</p>
                      </a>
                      <div style={{ marginTop: "-8px" }}>
                        <IconButton
                          className="text-rose-600"
                          onClick={() => {
                            handleRemoveItemImage(item, imageFileUrl[index]);
                          }}
                        >
                          <DeleteForeverOutlinedIcon style={{ color: "red" }} />
                        </IconButton>
                      </div>
                    </div>
                  ) : null;
                })}
              </label>
            </Stack>
          </Grid>
        </>
        {/* <>
          <Grid item xs={12} sm={12}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <label htmlFor="icon-button-file">
                <IconButton
                  onClick={() => {
                    handleUploadVideo();
                  }}
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <Button
                    style={{ width: "350px" }}
                    variant="contained"
                    sx={{ p: 1, bg: "#27272a" }}
                    endIcon={<CollectionsIcon />}
                  >
                    Upload Videos
                  </Button>
                </IconButton>
                {videoFileName.map((item, index) => {
                  return videoFileName ? (
                    <div className="flex justify-between ">
                      <a
                        className="text-black"
                        target="_blank"
                        href={videoFileUrl[index]}
                        rel="noreferrer"
                      >
                        <p>Uploaded Video: {item}</p>
                      </a>
                      <div style={{ marginTop: "-8px" }}>
                        <IconButton
                          className="text-rose-600"
                          onClick={() => {
                            handleRemoveItemVideo(item, videoFileUrl[index]);
                          }}
                        >
                          <DeleteForeverOutlinedIcon style={{ color: "red" }} />
                        </IconButton>
                      </div>
                    </div>
                  ) : null;
                })}
              </label>
            </Stack>
          </Grid>
        </> */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            multiline
            id="title"
            name="title"
            label="Name"
            fullWidth
            autoComplete="title"
            variant="standard"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            multiline
            id="description"
            name="description"
            label="Description"
            fullWidth
            autoComplete="description"
            variant="standard"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            multiline
            id="address"
            name="address"
            label="Location"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            multiline
            id="price"
            name="price"
            label="Price"
            fullWidth
            autoComplete="price"
            variant="standard"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <label>
            <input
              type="checkbox"
              checked={isDiscounted}
              onChange={handleCheckboxChange}
              style={{marginRight:'3%'}}
            />
          Is Discounted
          </label>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            multiline
            id="discount "
            name="discount "
            label="Discount Percentage"
            fullWidth
            variant="standard"
            value={discount}
            onChange={(e) => {
             setDiscount(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <InputLabel id="region-select-label">Region</InputLabel>
        <Select
            value={region}
            onChange={handleRegionChange}
            displayEmpty
            fullWidth
            sx={{height:30}}
          >
            <MenuItem  sx={{height:30}} value="Both"><em>None</em></MenuItem>
            <MenuItem  sx={{height:30}} value="Pakistan">Pakistan</MenuItem>
            <MenuItem  sx={{height:30}} value="UAE">UAE</MenuItem>
          </Select>
        </Grid>
        {/* <Grid item xs={12}>
          <TextField
            required
            id="expDate"
            helperText="Due Date"
            fullWidth
            autoComplete="job-exp"
            variant="standard"
            type="datetime-local"
            value={DueDate}
            onChange={(e) => {
              setDueDate(e.target.value);
            }}
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
