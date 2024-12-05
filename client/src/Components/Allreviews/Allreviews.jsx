import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Allreviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, []);

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
