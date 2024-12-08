import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaCalendarAlt, FaImage, FaPen, FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthContext/AuthContext";

const AddNewReview = () => {
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

    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your review has been submitted.",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });

    // Reset form
    setGameCover("");
    setGameTitle("");
    setReviewDescription("");
    setRating(1);
    setPublishingYear("");
    setGenre("Action");
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-teal-400 to-indigo-600 rounded-xl shadow-2xl mt-10 mb-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add New Review | Chill Gamer</title>
      </Helmet>
      <h2 className="text-4xl font-extrabold text-white mb-6 text-center">
        Add New Review
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
      >
        <div className="flex items-center space-x-3">
          <FaImage className="text-teal-500 text-2xl" />
          <label className="text-lg font-semibold text-gray-800">
            Game Cover Image URL
          </label>
        </div>
        <input
          type="url"
          value={gameCover}
          onChange={(e) => setGameCover(e.target.value)}
          required
          className="w-full mt-2 p-4 border-2 border-teal-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
          placeholder="Enter game cover image URL"
        />

        <div className="flex items-center space-x-3">
          <FaPen className="text-teal-500 text-2xl" />
          <label className="text-lg font-semibold text-gray-800">
            Game Title
          </label>
        </div>
        <input
          type="text"
          value={gameTitle}
          onChange={(e) => setGameTitle(e.target.value)}
          required
          className="w-full mt-2 p-4 border-2 border-teal-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
          placeholder="Enter game title"
        />

        <div className="flex items-center space-x-3">
          <FaPen className="text-teal-500 text-2xl" />
          <label className="text-lg font-semibold text-gray-800">
            Review Description
          </label>
        </div>
        <textarea
          value={reviewDescription}
          onChange={(e) => setReviewDescription(e.target.value)}
          required
          className="w-full mt-2 p-4 border-2 border-teal-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
          placeholder="Write your review here"
          rows="5"
        />

        <div className="flex items-center space-x-3">
          <FaStar className="text-teal-500 text-2xl" />
          <label className="text-lg font-semibold text-gray-800">Rating</label>
        </div>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full mt-2 p-4 border-2 border-teal-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
        >
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>

        <div className="flex items-center space-x-3">
          <FaCalendarAlt className="text-teal-500 text-2xl" />
          <label className="text-lg font-semibold text-gray-800">
            Publishing Year
          </label>
        </div>
        <input
          type="text"
          value={publishingYear}
          onChange={(e) => setPublishingYear(e.target.value)}
          required
          className="w-full mt-2 p-4 border-2 border-teal-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
          placeholder="Enter publishing year"
        />

        <div className="flex items-center space-x-3">
          <label className="text-lg font-semibold text-gray-800">Genre</label>
        </div>
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full mt-2 p-4 border-2 border-teal-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
        >
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="RPG">RPG</option>
          <option value="Strategy">Strategy</option>
          <option value="Simulation">Simulation</option>
        </select>

        <div className="flex items-center space-x-3">
          <label className="text-lg font-semibold text-gray-800">Email</label>
        </div>
        <input
          type="text"
          defaultValue={user.email}
          readOnly
          className="w-full mt-2 p-4 border-2 border-teal-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
          placeholder="Enter publishing year"
        />

        <div className="flex items-center space-x-3">
          <label className="text-lg font-semibold text-gray-800">
            User Name
          </label>
        </div>
        <input
          type="text"
          defaultValue={user.displayName}
          readOnly
          className="w-full mt-2 p-4 border-2 border-teal-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
          placeholder="Enter publishing year"
        />

        <button
          type="submit"
          className="w-full mt-6 bg-teal-600 text-white font-bold py-4 rounded-lg hover:bg-teal-700 focus:outline-none transition-all"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddNewReview;
