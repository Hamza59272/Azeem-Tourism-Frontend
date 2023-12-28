/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CollectionsIcon from "@mui/icons-material/Collections";
import InputLabel from '@material-ui/core/InputLabel';
import Button from "@mui/material/Button";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import SendIcon from "@mui/icons-material/Send";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
export default function EditForm({
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
  // videoFileName,
  // setVideoFileName,
  setImageFileName,
  imageFileName,
  setImageFileUrl,
  imageFileUrl,
  totalCount,
  setTotalCount,
  price,
  setPrice,
  packageData,
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
        if (!error && result && result.event === "success") {
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

  const handleRemoveItemImage = (name, url) => {
    setImageFileName(imageFileName.filter((item) => item !== name));
    setImageFileUrl(imageFileUrl.filter((item) => item !== url));
  };

  const useOldImages = () => {
    packageData.images.map((item) => {
      setImageFileName((imageFileName) => [...imageFileName, item.image]);
      setImageFileUrl((imageFileUrl) => [...imageFileUrl, item.image]);
    });
  };
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
                    style={{ width: "350px", backgroundColor: "#27272a" }}
                    variant="contained"
                    sx={{ p: 1, backgroundColor: "#27272a" }}
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

            {imageFileName.length !== 0 ? null : (
              <div style={{ paddingLeft: "9px" }}>
                <Button
                  onClick={useOldImages}
                  variant="contained"
                  style={{ marginTop: 8, backgroundColor: "#27272a" }}
                  endIcon={<CloudUploadOutlinedIcon />}
                >
                  Use Old Images
                </Button>
              </div>
            )}
          </Grid>
        </>
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
            label="location"
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
      
      </Grid>
    </React.Fragment>
  );
}
