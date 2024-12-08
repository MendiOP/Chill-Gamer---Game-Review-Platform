import React, { useContext, useState } from "react";
import { FaCalendarAlt, FaImage, FaPen, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthContext/AuthContext";

const Update = () => {
  const gameData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [gameCover, setGameCover] = useState("");
  const [gameTitle, setGameTitle] = useState("");
  const [reviewDescription, setReviewDescription] = useState("");
  const [rating, setRating] = useState(1);
  const [publishingYear, setPublishingYear] = useState("");
  const [genre, setGenre] = useState("Action");

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewData = {
      gameCover,
      gameTitle,
      reviewDescription,
      rating,
      publishingYear,
      genre,
      userEmail: user.email,
      userName: user.displayName,
    };

    console.log("Review submitted:", reviewData);

    fetch(
      `https://chill-gamer-server-omega-orcin.vercel.app/updateReview/${gameData._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reviewData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Your review has been updated.",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-600 rounded-xl shadow-2xl mt-10 mb-10">
      <h2 className="text-5xl font-extrabold text-white mb-8 text-center tracking-wide">
        Update Your Review
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-8 bg-white p-10 rounded-xl shadow-lg"
      >
        <div className="flex items-center space-x-4">
          <FaImage className="text-teal-600 text-3xl" />
          <label className="text-xl font-semibold text-gray-900">
            Game Cover Image URL
          </label>
        </div>
        <input
          type="url"
          name="gameCover"
          onChange={(e) => setGameCover(e.target.value)}
          defaultValue={gameData.gameCover}
          required
          className="w-full mt-3 p-4 border-2 border-teal-400 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
          placeholder="Enter game cover image URL"
        />

        <div className="flex items-center space-x-4">
          <FaPen className="text-teal-600 text-3xl" />
          <label className="text-xl font-semibold text-gray-900">
            Game Title
          </label>
        </div>
        <input
          type="text"
          onChange={(e) => setGameTitle(e.target.value)}
          defaultValue={gameData.gameTitle}
          required
          className="w-full mt-3 p-4 border-2 border-teal-400 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
          placeholder="Enter game title"
        />

        <div className="flex items-center space-x-4">
          <FaPen className="text-teal-600 text-3xl" />
          <label className="text-xl font-semibold text-gray-900">
            Review Description
          </label>
        </div>
        <textarea
          onChange={(e) => setReviewDescription(e.target.value)}
          defaultValue={gameData.reviewDescription}
          required
          className="w-full mt-3 p-4 border-2 border-teal-400 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
          placeholder="Write your review here"
          rows="5"
        />

        <div className="flex items-center space-x-4">
          <FaStar className="text-teal-600 text-3xl" />
          <label className="text-xl font-semibold text-gray-900">Rating</label>
        </div>
        <select
          defaultValue={gameData.rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full mt-3 p-4 border-2 border-teal-400 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
        >
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>

        <div className="flex items-center space-x-4">
          <FaCalendarAlt className="text-teal-600 text-3xl" />
          <label className="text-xl font-semibold text-gray-900">
            Publishing Year
          </label>
        </div>
        <input
          type="text"
          defaultValue={gameData.publishingYear}
          onChange={(e) => setPublishingYear(e.target.value)}
          required
          className="w-full mt-3 p-4 border-2 border-teal-400 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
          placeholder="Enter publishing year"
        />

        <div className="flex items-center space-x-4">
          <label className="text-xl font-semibold text-gray-900">Genre</label>
        </div>
        <select
          defaultValue={gameData.genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full mt-3 p-4 border-2 border-teal-400 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
        >
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="RPG">RPG</option>
          <option value="Strategy">Strategy</option>
          <option value="Simulation">Simulation</option>
        </select>

        <div className="flex items-center space-x-4">
          <label className="text-xl font-semibold text-gray-900">Email</label>
        </div>
        <input
          type="text"
          defaultValue={user.email}
          readOnly
          className="w-full mt-3 p-4 border-2 border-teal-400 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
          placeholder="Email (Read-Only)"
        />

        <div className="flex items-center space-x-4">
          <label className="text-xl font-semibold text-gray-900">
            User Name
          </label>
        </div>
        <input
          type="text"
          defaultValue={user.displayName}
          readOnly
          className="w-full mt-3 p-4 border-2 border-teal-400 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
          placeholder="User Name (Read-Only)"
        />

        <button
          type="submit"
          className="w-full mt-6 bg-teal-700 text-white font-bold py-4 rounded-xl hover:bg-teal-800 focus:outline-none transition-all"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Update;
