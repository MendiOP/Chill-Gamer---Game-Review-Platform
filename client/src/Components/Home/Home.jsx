import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HighestRated from "../HighestRatedSection/HighestRated";
import Slider from "../Slider/Slider";

const Home = () => {
  const location = useLocation();

  let isHomePath = location.pathname === "/";

  return (
    <div className="md:w-full ">
      <header>
        <Header />
      </header>
      <main className="lg:w-2/3 mx-auto">
        {isHomePath && (
          <>
            <Slider></Slider>
            <hr className="mt-12" />
            <HighestRated></HighestRated>
            <hr className="mt-12 mb-12" />
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
