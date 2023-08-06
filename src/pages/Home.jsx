import React from 'react';
import "../index.css";
import Hero from "../components/Hero";
import Header from "../components/Header"


function Home() {
  return (
    <>
      <div>
        <Header/>
        <Hero />        
      </div>
    </>
  )
}

export default Home;