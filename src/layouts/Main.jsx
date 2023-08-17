import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import backgroundImage from '../../public/bg.png';
import "../index.css"

const Main = () => {
  return (
    <>
      <div>
        <Header />
        <div style={{ backgroundImage: `url(${backgroundImage})` }}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
