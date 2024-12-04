import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Addreview from "./../Components/AddReview/Addreview";
import Allreviews from "./../Components/Allreviews/Allreviews";
import Error from "./../Components/ErrorPage/Error";
import GameWatchlist from "./../Components/GameWatchlist/GameWatchlist";
import Login from "./../Components/Login/Login";
import MyReviews from "./../Components/MyReviews/MyReviews";
import Register from "./../Components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/allreviews",
    element: <Allreviews></Allreviews>,
  },
  {
    path: "/addreview",
    element: <Addreview></Addreview>,
  },
  {
    path: "/myreviews",
    element: <MyReviews></MyReviews>,
  },
  {
    path: "/gamewatchlist",
    element: <GameWatchlist></GameWatchlist>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
