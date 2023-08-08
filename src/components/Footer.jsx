import React from 'react';
import "../index.css";

function Footer() {
  return (
    <footer className=" w-full flex justify-between p-2 bg-gray-500 items-center">
    <section className='flex gap-2 items-center justify-center'>
      <img src="../public/logo.png" className="w-auto h-10" alt="logo" />
      <h1 className="font-medium text-lg">MyTinerary</h1>
    </section>
    <section className="flex flex-col">
      <a href="#">Contact Us</a>
      <p>Franco Godoy</p>
      <p>AP MERN 07 TN</p>
    </section>
  </footer>
    );
  }
  
  export default Footer;
  /* <footer className="w-full top-100 flex justify-between p-2 bg-gray-500 items-center">
    <section className='flex gap-2 items-center justify-center'>
      <img src="../public/logo.png" className="w-auto h-10" alt="logo" />
      <h1 className="font-medium text-lg">MyTinerary</h1>
    </section>
    <section className="flex flex-col">
      <a href="#">Contact Us</a>
      <p>Franco Godoy</p>
      <p>AP MERN 07 TN</p>
    </section>
  </footer> */