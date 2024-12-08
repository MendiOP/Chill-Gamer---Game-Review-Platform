import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const GameCard = ({ id, gameTitle, rating, gameCover, releaseDate }) => {
  return (
    <div className="relative max-w-md mx-auto rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-none h-[20rem]">
      {/* Background Image */}
      <img
        src={gameCover}
        alt={`${gameTitle} cover`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <div className="absolute bottom-2 p-4 text-white">
        <h3 className="text-lg font-bold">{gameTitle}</h3>
        <div className="flex items-center gap-2 mt-1 text-sm">
          <span className="inline-flex items-center gap-1">
            <FaCalendarAlt className="mr-1" /> {releaseDate}
          </span>
        </div>
      </div>

      {/* Circular Rating Badge */}
      <div className="absolute top-3 left-3 bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center border-4 border-orange-500">
        <span className="text-lg font-bold text-orange-500">{rating}</span>
      </div>

      <div className="absolute bottom-1 right-1">
        <button className="px-4 py-2 bg-gradient-to-r from-blue-700 to-teal-600 text-white text-base font-semibold rounded-lg hover:from-blue-600 hover:to-teal-700 transition">
          <Link to={`/review/${id}`}>Explore Details</Link>
        </button>
      </div>
    </div>
  );
};

export default GameCard;
