import React from "react";
import { useLoaderData } from "react-router-dom";

const ReviewDetails = () => {
  const gameData = useLoaderData();
  console.log(gameData);

  return (
    <div className="container mx-auto p-6 bg-gradient-to-b from-gray-50 to-gray-200 shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Game Cover */}
        <div className="w-full md:w-2/3">
          <img
            className="w-full rounded-lg shadow-md border-2 border-gray-300"
            src={gameData.gameCover}
            alt={gameData.gameTitle}
          />
        </div>

        {/* Game Details */}
        <div className="w-full md:w-1/3 bg-white shadow-md p-6 rounded-lg border-2 border-gray-300">
          <h1 className="text-4xl font-extrabold text-gray-800">
            {gameData.gameTitle}
          </h1>

          <div className="mt-3">
            <span className="badge badge-primary px-4 py-3 text-base font-bold">
              {gameData.genre}
            </span>
          </div>

          <p className="mt-4 text-gray-600 text-lg">
            <strong>Released On:</strong> {gameData.publishingYear}
          </p>

          <hr className="my-6 border-gray-300" />

          {/* User Info */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="avatar">
                <div className="w-10 h-10 rounded-full bg-gray-100 shadow-inner flex items-center justify-center">
                  <p className="text-indigo-500 text-3xl flex justify-center items-center font-bold">
                    A
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {gameData.userName}
                </h2>
                <p className="text-gray-500 text-sm">{gameData.userEmail}</p>
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Users Rating:
              </h2>
              <div className="rating rating-lg">
                {Array.from({ length: 5 }, (_, i) => (
                  <input
                    key={i}
                    type="radio"
                    name="rating"
                    className={`mask mask-star-2 ${
                      i < gameData.rating ? "bg-yellow-500" : "bg-gray-300"
                    }`}
                    readOnly
                    checked={i + 1 === gameData.rating}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="mt-4 text-gray-600 text-base">
              {gameData.reviewDescription}
            </p>
          </div>

          {/* Watchlist Button */}
          <div className="mt-6">
            <button className="btn btn-primary btn-wide text-lg font-bold">
              Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
