import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Allreviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

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
      <h1 className="font-bold text-xl md:text-3xl text-center">
        Popular Games You can give a try
      </h1>
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
