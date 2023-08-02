import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "../public/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div>
        <header >
          <section >  
            <h1>MyTinerary</h1>
            <img src={"reactLogo"} alt="react" />
          </section>
          <nav>
            <ol>
              <li><a href="#">Home</a></li>
              <li><a href="#">Cities</a></li>
              <li><a href="#">Login</a></li>
            </ol>
          </nav>
        </header>
        <body>
          <div>
            <h1>Find the perfect destination</h1>
            <h3>
              Our app will help you find the perfect path for your next trip.
              With an easy-to-use interface and a host of itinerary options,
              planning your next trip has never been easier.
            </h3>
            <button>View More</button>
          </div>
          <img alt="carrusa"></img>
        </body>
      </div>
    </>
  );
}

export default App;
