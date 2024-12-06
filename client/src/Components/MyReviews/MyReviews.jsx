import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteReview/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your review has been deleted.", "success");
              const newReviews = reviews.filter((review) => review._id !== id);
              setReviews(newReviews);
            }
          });
      }
    });
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
                key={review._id}
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
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-blue-600 transition">
                    <Link to={`/updateReview/${review._id}`}>Update</Link>
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    onClick={() => handleDelete(review._id)}
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
