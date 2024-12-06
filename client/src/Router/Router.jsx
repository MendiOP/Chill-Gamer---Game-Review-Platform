import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import ReviewDetails from "../Components/ReviewDetails/ReviewDetails";
import Update from "../Update/Update";
import Addreview from "./../Components/AddReview/Addreview";
import Allreviews from "./../Components/Allreviews/Allreviews";
import Error from "./../Components/ErrorPage/Error";
import GameWatchlist from "./../Components/GameWatchlist/GameWatchlist";
import Login from "./../Components/Login/Login";
import MyReviews from "./../Components/MyReviews/MyReviews";
import PrivateRoute from "./../Components/PrivateRoute/PrivateRoute";
import Register from "./../Components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/allreviews",
        element: <Allreviews></Allreviews>,
      },
      {
        path: "/addreview",
        element: (
          <PrivateRoute>
            <Addreview></Addreview>
          </PrivateRoute>
        ),
      },
      {
        path: "/review/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/reviews/${params.id}`),
        element: (
          <PrivateRoute>
            <ReviewDetails></ReviewDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateReview/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updateReview/${params.id}`),
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/gamewatchlist",
        element: (
          <PrivateRoute>
            <GameWatchlist></GameWatchlist>
          </PrivateRoute>
        ),
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
    ],
  },
]);

export default router;
