import React from "react";

const ReviewCard = ({
  key,
  image,
  title,
  review,
  rating,
  year,
  genre,
  reviewerName,
  reviewerEmail,
}) => {
  const stars = Array(5)
    .fill(false)
    .map((_, index) => index < rating);

  return (
    <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white transform transition-transform hover:scale-105 flex flex-col">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="flex flex-col p-4 flex-grow">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600 text-sm flex-grow">{review}</p>
        <div className="flex items-center mt-4">
          {stars.map((filled, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${
                filled ? "text-yellow-500" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 15l-5.197 3.073 1.363-5.928L1 6.735l6.364-.552L10 1l2.636 5.183 6.364.552-4.166 5.41 1.363 5.928L10 15z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <span>{year}</span>
          <span className="bg-gray-200 px-2 py-1 rounded-full text-sm text-gray-700">
            {genre}
          </span>
        </div>
      </div>
      <button className="w-1/2 py-2 bg-teal-500 text-white text-center font-semibold rounded-lg mt-3 mb-2 transform transition-all duration-200 ease-in-out hover:bg-teal-600 active:scale-95 mx-auto">
        Explore Details
      </button>
    </div>
  );
};

export default ReviewCard;
