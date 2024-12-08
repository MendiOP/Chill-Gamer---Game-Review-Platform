import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthContext/AuthContext";
import sad from "../../assets/sad.gif";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/myReviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setTimeout(() => setLoading(false), 5000);
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

  // default div to show nothing in yourreviews
  if (reviews.length === 0) {
    return (
      <div className="text-center text-2xl mt-16 p-8 bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md max-w-lg mx-auto">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Reviews | Chill Gamer</title>
        </Helmet>
        <div className="text-purple-600 font-bold text-3xl mb-6">
          No reviews in your list.
        </div>
        <img
          src={sad}
          alt="sad"
          className="w-1/2 rounded-xl mx-auto mb-6" // Adjust size and spacing for the image
        />
        <div className="text-gray-700 text-xl font-semibold">
          You haven't added any reviews to the community yet. Start browsing and
          write your favorites!
        </div>
      </div>
    );
  }

  if (reviews.length === 0 && loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Reviews | Chill Gamer</title>
        </Helmet>
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        <p className="ml-4 text-lg font-semibold">Loading data...</p>
      </div>
    );
  }

  return (
    <div className="p-4 text-faltu">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Reviews | Chill Gamer</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-6 text-faltu">
        Game Reviews
      </h1>
      <div className="overflow-x-auto ">
        <table className="table w-full border-b-2  rounded-lg bg-faltu">
          <thead className="bg-[#005F73] text-white text-lg">
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
                className="hover:bg-gray-200 dark:hover:bg-[#005F73] transition-all duration-300 text-lg"
              >
                <td className="p-4 ">{review.gameTitle}</td>
                <td className="p-4  hidden lg:table-cell">
                  {review.reviewDescription.length > 50
                    ? review.reviewDescription.substring(0, 50) + "..."
                    : review.reviewDescription}
                </td>
                <td className="p-4  hidden md:table-cell">{review.rating}/5</td>
                <td className="p-4 ">{review.genre}</td>
                <td className="p-4 space-y-2">
                  <button className="bg-blue-500 px-4 py-2 rounded-lg mr-4 hover:bg-blue-600 hover:shadow-lg dark:hover:shadow-indigo-700 transition-all duration-300">
                    <Link to={`/updateReview/${review._id}`}>Update</Link>
                  </button>
                  <button
                    className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 hover:shadow-lg dark:hover:shadow-red-700 transition-all duration-300"
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
