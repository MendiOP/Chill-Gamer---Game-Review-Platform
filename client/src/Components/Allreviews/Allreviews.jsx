import React, { useEffect, useState } from "react";
import sad from "../../assets/sad.gif";
import ReviewCard from "./ReviewCard";

const Allreviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortedGames, setSortedGames] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setTimeout(() => setLoading(false), 500);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      });
  }, []);

  // default div to show nothing in yourreviews
  if (reviews.length === 0) {
    return (
      <div className="text-center text-2xl mt-16 p-8 bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md max-w-lg mx-auto">
        <div className="text-purple-600 font-bold text-3xl mb-6">
          No reviews &#128542;
        </div>
        <img
          src={sad}
          alt="sad"
          className="w-1/2 rounded-xl mx-auto mb-6" // Adjust size and spacing for the image
        />
        <div className="text-gray-700 text-xl font-semibold">
          There is no reviews available at the moment. Please check back later.
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        <p className="ml-4 text-lg font-semibold">Loading data...</p>
      </div>
    );
  }

  return (
    <div className="mt-10 mb-10 space-y-10 border border-black">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl md:text-3xl text-center">
          Popular Games You can give a try
        </h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <label htmlFor="Filter" className="mr-2">
              Filter:
            </label>
            <select
              id="Filter"
              className="select select-bordered select-sm"
              defaultValue="Genre"
            >
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="RPG">RPG</option>
              <option value="Strategy">Strategy</option>
              <option value="Simulation">Simulation</option>
            </select>
          </div>

          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2">
              Sort By:
            </label>
            <select
              id="sort"
              className="select select-bordered select-sm"
              defaultValue="default"
            >
              <option value="default">Default</option>
              <option value="year">year (Low &gt; High)</option>
              <option value="year">year (High &gt; Low)</option>
              <option value="rating">rating (Low &gt; High)</option>
              <option value="rating">rating (High &gt; Low)</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-fit mx-auto">
        {reviews.map((review) => {
          return (
            <ReviewCard
              key={review._id}
              id={review._id}
              genre={review.genre}
              year={review.publishingYear}
              rating={review.rating}
              image={review.gameCover}
              title={review.gameTitle}
              description={review.reviewDescription}
              reviewerEmail={review.userEmail}
              reviewerName={review.userName}
            ></ReviewCard>
          );
        })}
      </div>
    </div>
  );
};

export default Allreviews;
