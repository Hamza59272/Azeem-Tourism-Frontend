import React from "react";
import { BsLinkedin, BsFacebook, BsTiktok, BsInstagram } from "react-icons/bs";
import { TbBrandThreads } from "react-icons/tb";
import { AiOutlinePhone } from "react-icons/ai";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg.jpg";
import bgBlack from "../assets/black.jpg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-zinc-800 text-white p-6 flex-col justify-center items-center mt-4"   
    style={{
      backgroundImage: location.pathname.includes("/contact") ? `url(${bgBlack})` : `url(${bgImage})`,
      backgroundSize: '100%',
      backgroundRepeat: "no-repeat",
      display : 'flex',
      flexDirection : "column",
      border:1,
      borderRadius:10,
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      //width:'100%'
    }}>

      <div>
        <ul className="gap-x-5 lg:gap-x-10 flex justify-center flex-row flex-wrap ">
        <li>
          <p
            className="font-bold cursor-pointer  hover:text-yellow-300 transition ease-in-out duration-500  "
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </p>
        </li>
        <li>
          <p
            className="font-bold cursor-pointer hover:text-yellow-300 transition ease-in-out duration-500  "
            onClick={() => {
              navigate("/packages");
            }}
          >
            Holiday Packages
          </p>
        </li>
        <li>
          <p
            className="font-bold cursor-pointer hover:text-yellow-300 transition ease-in-out duration-500  "
            onClick={() => {
              navigate("/tours");
            }}
          >
            Tours
          </p>
        </li>
        <li>
          <p
            className="font-bold cursor-pointer hover:text-yellow-300 transition ease-in-out duration-500  "
            onClick={() => {
              navigate("/tickets");
            }}
          >
            Tickets
          </p>
        </li>
        <li>
          <p
            className="font-bold cursor-pointer hover:text-yellow-300 transition ease-in-out duration-500  "
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </p>
        </li>
        <li>
          <p
            className="font-bold cursor-pointer hover:text-yellow-300 transition ease-in-out duration-500  "
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </p>
        </li>
        </ul>
      </div>
      <div>
      <ul className="social__links flex space-x-10 lg:space-x-20 mt-4 justify-center mb-4 ">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61552420340278"
            target="_blank"
            rel="noreferrer"
            className="text-white font-bold"
          >
            <BsFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/azeem-tourism-60b4b5295/"
            target="_blank"
            rel="noreferrer"
            className="text-white  font-bold"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@azeem.tourism?_t=8gKyynJGcvH&_r=1"
            target="_blank"
            rel="noreferrer"
            className="text-white font-bold"
          >
            <BsTiktok />
          </a>
        </li>
        <li>
          <a
            href="https://www.threads.net/@azeemtourism"
            target="_blank"
            rel="noreferrer"
            className="text-white font-bold"
          >
            <TbBrandThreads />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/azeemtourism?igshid=NGVhN2U2NjQ0Yg=="
            target="_blank"
            rel="noreferrer"
            className="text-white font-bold"
          >
            <BsInstagram />
          </a>
        </li>
        <li>
          <a
            href="mailto:azeemtourism@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-white font-bold"
          >
            <HiOutlineMail />
          </a>
        </li>
      </ul>
      </div>
      <div>
      <ul className="flex flex-col sm:flex-row sm:space-x-4 justify-center">
        <li className="flex items-center space-x-2">
          <FaPhoneAlt className="w-4 h-4" />
          <p className="text-md pt-3 font-bold">+971522760013</p>
        </li>
        <li className="flex items-center space-x-2">
          <FaHome className="w-5 h-5" />
          <p className="text-md pt-3 font-bold">
            CBD 11, Shop # 02, International City, Dubai, United Arab Emirates
          </p>
        </li>
      </ul>
      </div>
      <p className="mb-4 text-center">
        <span className="cursor-pointer font-light font-bold">Azeem Tourism</span>
      </p>
    </div>
  );
};

export default Footer;
