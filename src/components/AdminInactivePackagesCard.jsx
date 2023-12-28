/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { Card } from "flowbite-react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import CircularProgress from "@material-ui/core/CircularProgress";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import IconButton from "@material-ui/core/IconButton";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";
import { Link } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { RiDeleteBin5Line } from "react-icons/ri";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CardActions from "@material-ui/core/CardActions";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function AdminPackagesCard() {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const URL = "http://localhost:8080/api/packages/get";
    axios
      .get(URL)
      .then((response) => {
        const filtered = response.data.filter(
          (packages) => packages.active === false,
        );
        setData(filtered);
        // window.location.reload()
      })
      .catch((error) => {
        // event.preventDefault();
      });
  }, [reload]);
  const updateVisibility = async (id) => {
    const URL = `http://localhost:8080/api/packages/update/${id}`;
    await axios
      .post(URL, {
        active: true,
      })
      .then((response) => {
        setReload(!reload);
      })
      .catch((error) => {
        // event.preventDefault();
      });
  };
  const removePackage = async (id) => {
    const URL = `http://localhost:8080/api/packages/delete/${id}`;
    await axios
      .delete(URL)
      .then((response) => {
        setReload(!reload);
      })
      .catch((error) => {
        // event.preventDefault();
      });
  };

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(1);
  return (
    <Section id="AdminPackagesCard">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-5 p-3 bg-white rounded-lg shadow-lg border-2">
        {data.map((destination) => {
          return (
            <>
              <Card className="shadow-lg rounded-lg lg:w-90 border-2 h-auto w-auto relative">
                <div className="icon flex justify-center">
                  <img
                    src={destination.images[0].image}
                    alt=""
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      height: "100%",
                    }}
                  />
                   {
								destination?.isDiscounted && (
									<div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-3 rounded-tl-lg">
									
										{destination.Discount}% OFF
									</div>
								)
								}
                </div>
                <p className="text-center text-md font-semibold mb-0">
                  {destination.title}
                </p>
                <p className="text-justify w-full h-24 overflow-auto font-normal text-zinc-700 text-sm mt-0">
                  {destination.description}
                </p>

                <div className=" flex justify-between flex-row">
                  <div>
                    <span className="font-bold text-md">
                      Available Ticket:{" "}
                    </span>
                    <span className="text-md">{destination.totalCount}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  {destination.isDiscounted && (
                    <p className="text-gray-500 line-through mr-2">
                      {"$" + destination.price}
                    </p>
                  )}
                  <p className="font-bold text-lg mt-1 mr-auto">
                    {"$" +
                      (destination.isDiscounted
                        ? destination.price -
                          (destination.price * destination.Discount) / 100
                        : destination.price)}
                  </p>
                </div>
                
                <div>
                    <p className="text-justify w-full h-24 overflow-auto font-normal text-zinc-700 text-sm mt-0">
                      For Region: {''}{destination.region ?  destination.region : null}
                    </p>
                </div>
                <div className="flex justify-around bg-white text-zinc-800 hover:text-white transition-colors duration-100 text-md font-medium text-center rounded-lg bg-primary-700 w-full">
                  <Tooltip title="Edit">
                    <IconButton
                      onClick={() =>
                        navigate("/admin/editPackageDetails", {
                          state: destination,
                        })
                      }
                      aria-label="Edit"
                    >
                      <Link
                        to={{
                          pathname: "/admin/editPackageDetails",
                          state: "destination",
                        }}
                        style={{ textDecoration: "none", color: "grey" }}
                      >
                        <RiEdit2Fill style={{ color: "black" }} />
                      </Link>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Unhide">
                    <IconButton
                      onClick={() => {
                        updateVisibility(destination._id);
                      }}
                      aria-label="Unhide"
                    >
                      <VisibilityIcon style={{ color: "black" }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      onClick={() => {
                        removePackage(destination._id);
                      }}
                      aria-label="Delete"
                    >
                      <DeleteForeverIcon style={{ color: "red" }} />
                    </IconButton>
                  </Tooltip>
                </div>
              </Card>
            </>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
