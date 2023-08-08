import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" w-full flex justify-between p-2 bg-blue-950 items-center text-blue-500 hover:shadow-md hover:text-white hover:p-2 duration-200 ease-in-out">
      <Link
        to="/Home"
        className="flex gap-2 items-center justify-center cursor-pointer"
      >
        <img src="../public/logo.png" className="w-auto h-10" alt="logo" />
        <h1 className="font-medium text-lg hover:shadow-md hover:p-2 duration-200 ease-in-out">
          MyTinerary
        </h1>
      </Link>
      <section className="flex flex-col text-white">
        <a href="#">Contact Us</a>
        <p>Franco Godoy</p>
        <p>AP MERN 07 TN</p>
      </section>
    </footer>
  );
}

export default Footer;
