import React from 'react';
import Nav from "./Nav";
import "../index.css";

function Header() {
  return (
    <header className="fixed top-0 w-full flex justify-between p-2 h-[10vh] bg-gray-500 items-center z-10">
      <section className="flex gap-3 items-center justify-center">
        <img src="../public/logo.png" className="w-auto h-10" alt="logo" />
        <h1 className="font-medium text-2xl">MyTinerary</h1>
      </section>
      <Nav />
    </header>
  );
}

export default Header;
