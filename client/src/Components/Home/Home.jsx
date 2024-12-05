import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";

const Home = () => {
  const location = useLocation();

  let isHomePath = location.pathname === "/";

  return (
    <div className="border border-blue-500 md:w-2/3 mx-auto">
      <header>
        <Header />
      </header>
      <main>
        {isHomePath && (
          <>
            <Slider></Slider>
          </>
        )}
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
