import React from "react";
import { BsLinkedin, BsFacebook, BsTiktok, BsInstagram } from "react-icons/bs";
import { TbBrandThreads } from "react-icons/tb";
import { AiOutlinePhone } from "react-icons/ai";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-zinc-800 text-white p-6 flex-col justify-center items-center mt-4">
      <ul className="gap-x-5 lg:gap-x-10 flex justify-center flex-row flex-wrap ">
        <li>
          <p
            className="font-semibold cursor-pointer  hover:text-yellow-300 transition ease-in-out duration-500  "
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </p>
        </li>
        <li>
          <p
            className="font-semibold cursor-pointer hover:text-yellow-300 transition ease-in-out duration-500  "
            onClick={() => {
              navigate("/packages");
            }}
          >
            Holiday Packages
          </p>
        </li>
        <li>
          <p
            className="font-semibold cursor-pointer hover:text-yellow-300 transition ease-in-out duration-500  "
            onClick={() => {
              navigate("/tours");
            }}
          >
            Tours
          </p>
        </li>
        <li>
          <p
            className="font-semibold cursor-pointer hover:text-yellow-300 transition ease-in-out duration-500  "
            onClick={() => {
              navigate("/tickets");
            }}
          >
            Tickets
          </p>
        </li>
        <li>
          <p
            className="font-semibold cursor-pointer hover:text-yellow-300 transition ease-in-out duration-500  "
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </p>
        </li>
        <li>
          <p
            className="font-semibold cursor-pointer hover:text-yellow-300 transition ease-in-out duration-500  "
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </p>
        </li>
      </ul>
      <ul className="social__links flex space-x-10 lg:space-x-20 mt-4 justify-center mb-4 ">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61552420340278"
            target="_blank"
            rel="noreferrer"
            className="text-white "
          >
            <BsFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/azeem-tourism-60b4b5295/"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@azeem.tourism?_t=8gKyynJGcvH&_r=1"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <BsTiktok />
          </a>
        </li>
        <li>
          <a
            href="https://www.threads.net/@azeemtourism"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <TbBrandThreads />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/azeemtourism?igshid=NGVhN2U2NjQ0Yg=="
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <BsInstagram />
          </a>
        </li>
        <li>
          <a
            href="mailto:azeemtourism@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <HiOutlineMail />
          </a>
        </li>
      </ul>
      <ul className="flex flex-col sm:flex-row sm:space-x-4 justify-center">
        <li className="flex items-center space-x-2">
          <FaPhoneAlt className="w-4 h-4" />
          <p className="text-md font-light pt-3">+971522760013</p>
        </li>
        <li className="flex items-center space-x-2">
          <FaHome className="w-5 h-5" />
          <p className="text-md font-light pt-3">
            CBD 11, Shop # 02, International City, Dubai, United Arab Emirates
          </p>
        </li>
      </ul>

      <p className="mb-4 text-center">
        <span className="cursor-pointer font-light">Azeem Tourism</span>
      </p>
    </div>
  );
};

export default Footer;
