import React, { useEffect, useState } from "react";
import sad from "../../assets/sad.gif";
import ReviewCard from "./ReviewCard";

const Allreviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setFilteredReviews(data);
        setTimeout(() => setLoading(false), 500);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      });
  }, []);

  const handleFilter = (event) => {
    const genre = event.target.value;
    const filteredGames =
      genre === "default"
        ? reviews
        : reviews.filter((game) => game.genre === genre);
    setFilteredReviews(filteredGames);
  };

  const handleSort = (event) => {
    const value = event.target.value;
    const field = value.split("-")[0];
    const order = value.split("-")[1];
    const sortedGames = [...filteredReviews].sort((a, b) => {
      if (order === "asc") {
        return a[field] - b[field];
      } else {
        return b[field] - a[field];
      }
    });

    setFilteredReviews(sortedGames);
  };

  // default div to show nothing in yourreviews
  if (reviews.length === 0) {
    return (
      <div className="text-center text-2xl mt-16 p-8 bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md max-w-lg mx-auto">
        <div className="text-purple-600 font-bold text-3xl mb-6">
          No reviews &#128542;
        </div>
        <img src={sad} alt="sad" className="w-1/2 rounded-xl mx-auto mb-6" />
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
    <div className="mt-10 mb-10 space-y-10">
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <h1 className="font-bold text-3xl md:text-4xl text-center">
          Popular Games You Can Play
        </h1>

        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center">
            <label htmlFor="Filter" className="mr-2">
              Filter:
            </label>
            <select
              id="Filter"
              className="select select-bordered select-sm"
              defaultValue="default"
              onChange={handleFilter}
            >
              <option value="default">Genre</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="RPG">RPG</option>
              <option value="Strategy">Strategy</option>
              <option value="Simulation">Simulation</option>
            </select>
          </div>
          <div className="flex items-center">
            <label htmlFor="Sort" className="mr-2">
              Sort:
            </label>
            <select
              id="Sort"
              className="select select-bordered select-sm"
              defaultValue="Default"
              onChange={handleSort}
            >
              <option value="default">Default</option>
              <option value="publishingYear-asc">Year (Low &gt; High)</option>
              <option value="publishingYear-dsc">Year (High &gt; Low)</option>
              <option value="rating-asc">Rating (Low &gt; High)</option>
              <option value="rating-dsc">Rating (High &gt; Low)</option>
            </select>
          </div>
        </div>
      </div>

      {filteredReviews.length === 0 ? (
        <div className="flex flex-col items-center mt-16 justify-center border border-gray-300 rounded-lg p-6 bg-gray-50 max-w-md mx-auto shadow-md">
          <span className="text-4xl mb-3">😔</span>
          <p className="text-2xl font-bold text-gray-600 text-center">
            There are no games available for this genre
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-fit mx-auto">
          {filteredReviews.map((review) => (
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
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Allreviews;
