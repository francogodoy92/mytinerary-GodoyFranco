import React from "react";
import Nav from "./Nav";
import "../index.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 w-full flex justify-between p-2 h-[10vh] bg-blue-950 items-center z-10 shadow-lg">
      <Link
        to="/Home"
        className="flex gap-3 items-center justify-center cursor-pointer"
      >
        <img src="../public/logo.png" className="w-auto h-10" alt="logo" />
        <h1 className="font-medium text-2xl text-blue-500 hover:shadow-md hover:text-white hover:p-2 duration-200 ease-in-out">
          MyTinerary
        </h1>
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
