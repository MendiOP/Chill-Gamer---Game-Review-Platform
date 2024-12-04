import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="border border-blue-500 md:w-2/3 mx-auto">
      <header>
        <Header />
      </header>
      <main>
        <Outlet></Outlet>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
