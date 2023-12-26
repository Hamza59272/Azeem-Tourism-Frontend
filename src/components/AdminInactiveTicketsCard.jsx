/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { RiEdit2Fill } from "react-icons/ri";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { RiDeleteBin5Line } from "react-icons/ri";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function AdminPackagesCard() {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const URL = "http://localhost:8080/api/tickets/get";
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
    const URL = `http://localhost:8080/api/tickets/update/${id}`;
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
  const removeTickets = async (id) => {
    const URL = `http://localhost:8080/api/tickets/delete/${id}`;
    await axios
      .delete(URL)
      .then((response) => {
        setReload(!reload);
      })
      .catch((error) => {
        // event.preventDefault();
      });
  };
  // const data = [
  //     {
  //         image: Destination1,
  //         title: "Singapore",
  //         subTitle: "Singapore, officialy thr Republic of Singapore, is a",
  //         cost: "38,800",
  //         duration: 6,
  //     },
  //     {
  //         image: Destination2,
  //         title: "Thailand",
  //         subTitle: "Thailand is a Southeast Asia country. It's known for",
  //         cost: "54,200",
  //         duration: 10,
  //     },
  //     {
  //         image: Destination3,
  //         title: "Paris",
  //         subTitle: "Paris, France's capital, is a major European city and a",
  //         cost: "45,500",
  //         duration: 156,
  //     },
  //     {
  //         image: Destination4,
  //         title: "New Zealand",
  //         subTitle: "New Zealand is an island country in the",
  //         cost: "24,100",
  //         duration: 178,
  //     },
  //     {
  //         image: Destination5,
  //         title: "Bora Bora",
  //         subTitle: "Bora Bora is a small South Pacific island northwest of",
  //         cost: "95,400",
  //         duration: 5,
  //     },
  //     {
  //         image: Destination6,
  //         title: "London",
  //         subTitle: "London, the capital of England and the United",
  //         cost: "38,800",
  //         duration: 550,
  //     },
  // ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="AdminPackagesCard">
      {/* <div className="title">
        <h2>In Active Tickets</h2>
      </div> */}
      {/* <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div> */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-5 p-3 bg-white rounded-lg shadow-lg border-2">
        {data.map((destination) => {
          return (
            <>
              {/* <Link
              style={{ textDecoration: "none", color: "black" }}
              // to={`/packages/${destination.title}`}
              className="blog__title"
            >
              <div className="destination">
                <img src={destination.images[0].image} alt="" />
                <h3>{destination.title}</h3>
                <p
                  style={{
                    width: "300px",
                    height: "100px",
                    overflow: "hidden",
                  }}
                  className="section__description mt-3"
                >
                  {destination.description.length > 150
                    ? destination.description.substr(0, 150)
                    : destination.description}
                </p>
                <div className="info">
                  <div className="services">Price</div>
                  <h4>{destination.cost}</h4>
                </div>
                <div className="distance">
                  <span>Available Ticket</span>
                  <span>{destination.totalCount}</span>
                </div>

                <CardActions style={{ justifyContent: "space-around" }}>
                  <Tooltip title="Edit">
                    <IconButton
                      onClick={() =>
                        navigate("/admin/editTicketDetails", {
                          state: destination,
                        })
                      }
                      aria-label="Edit"
                    >
                      <Link
                        to={{
                          pathname: "/admin/editTicketDetails",
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
                        removeTickets(destination._id);
                      }}
                      aria-label="Delete"
                    >
                      <DeleteForeverIcon style={{ color: "red" }} />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </div>
            </Link> */}
              <Card className="shadow-lg rounded-lg lg:w-90 border-2 h-auto w-auto">
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
                  <p className="font-bold text-md">{"$" + destination.price}</p>
                </div>
                <div className="flex justify-around bg-white text-zinc-800 hover:text-white transition-colors duration-100 text-md font-medium text-center rounded-lg bg-primary-700 w-full">
                  <Tooltip title="Edit">
                    <IconButton
                      onClick={() =>
                        navigate("/admin/editTicketDetails", {
                          state: destination,
                        })
                      }
                      aria-label="Edit"
                    >
                      <Link
                        to={{
                          pathname: "/admin/editTicketDetails",
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
                        removeTickets(destination._id);
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
