import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myReviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, [user?.email]);

  // Handlers for Update and Delete
  const handleUpdate = (id) => {
    alert(`Update button clicked for Review ID: ${id}`);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this review?"
    );
    if (confirmed) {
      setReviews(reviews.filter((review) => review.id !== id));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
        Game Reviews
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full border-2 border-gray-300 rounded-lg">
          <thead className="bg-indigo-500 text-white text-lg">
            <tr>
              <th className="p-4 text-left">Game Title</th>
              <th className="p-4 text-left hidden lg:table-cell">
                Description
              </th>
              <th className="p-4 text-left hidden md:table-cell">Rating</th>
              <th className="p-4 text-left">Genre</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr
                key={review.id}
                className="hover:bg-indigo-100 transition-all text-lg"
              >
                <td className="p-4 border-b">{review.gameTitle}</td>
                <td className="p-4 border-b hidden lg:table-cell">
                  {review.reviewDescription.length > 50
                    ? review.reviewDescription.substring(0, 50) + "..."
                    : review.reviewDescription}
                </td>
                <td className="p-4 border-b hidden md:table-cell">
                  {review.rating}
                </td>
                <td className="p-4 border-b">{review.genre}</td>
                <td className="p-4 border-b space-y-2">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-blue-600 transition"
                    onClick={() => handleUpdate(review.id)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    onClick={() => handleDelete(review.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
