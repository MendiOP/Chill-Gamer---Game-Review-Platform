import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import sad from "../../assets/sad.gif";

const GameWatchlist = () => {
  const [watchListdatas, setWatchListDatas] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true); // Start loading
    fetch("http://localhost:5000/watchlist")
      .then((res) => res.json())
      .then((data) => {
        setWatchListDatas(data);
      })
      .catch((error) => console.error("Error fetching watchlist:", error))
      .finally(() => setLoading(false)); // Stop loading
  }, []);

  // Filter the user's watchlist
  const usersWatchList = watchListdatas.filter(
    (game) => game.myEmail === user.email
  );

  if (loading) {
    // Show loading spinner while data is being fetched
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg font-semibold">
            Loading your watchlist...
          </p>
        </div>
      </div>
    );
  }

  if (usersWatchList.length === 0) {
    // Show "No Games Found" message when the watchlist is empty
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center p-8 bg-gray-100 border-2 border-gray-200 rounded-xl shadow-lg max-w-md md:max-w-lg">
          <h2 className="text-purple-500 font-extrabold text-3xl md:text-4xl mb-6">
            No Games Found!
          </h2>
          <img src={sad} alt="sad" className="w-1/2 rounded-xl mx-auto mb-6" />
          <p className="text-gray-600 text-lg md:text-xl">
            Your watchlist is currently empty. Start exploring and add your
            favorite games to your list.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto p-4 bg-gray-50">
      <table className="table w-full border-collapse mt-6 bg-white shadow-lg rounded-lg hidden md:table">
        <thead className="bg-teal-500 text-white">
          <tr>
            <th className="px-6 py-5 text-center text-lg">Game Cover</th>
            <th className="px-6 py-5 text-center text-lg">Game Title</th>
            <th className="px-6 py-5 text-center text-lg">Genre</th>
            <th className="px-6 py-5 text-center text-lg">Published Year</th>
            <th className="px-6 py-5 text-center text-lg">Rating</th>
            <th className="px-6 py-5 text-center text-lg md:hidden lg:block">
              Review
            </th>
            <th className="px-6 py-5 text-center text-lg">Author</th>
          </tr>
        </thead>
        <tbody className="text-gray-800 text-lg">
          {usersWatchList.map((game) => (
            <tr
              key={game._id}
              className="border-b hover:bg-gray-100 transition-all"
            >
              <td className="px-6 py-5 text-center">
                <img
                  src={game.gameCover}
                  alt={game.gameTitle}
                  className="w-24 h-24 object-cover rounded-lg mx-auto"
                />
              </td>
              <td className="px-6 py-5 text-center">{game.gameTitle}</td>
              <td className="px-6 py-5 text-center">{game.genre}</td>
              <td className="px-6 py-5 text-center">{game.publishingYear}</td>
              <td className="px-6 py-5 text-center text-yellow-500 font-bold">
                {game.rating}
              </td>
              <td className="px-6 py-5 text-center max-w-xs truncate  md:hidden lg:block">
                {game.reviewDescription}
              </td>
              <td className="px-6 py-5 text-center">{game.userName}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Transposed Table for sm screens */}
      <div className="md:hidden">
        {usersWatchList.map((game) => (
          <div
            key={game._id}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 mb-6 hover:shadow-lg transition-all"
          >
            <div className="mb-4 text-center">
              <img
                src={game.gameCover}
                alt={game.gameTitle}
                className="w-32 h-32 object-cover rounded-lg mx-auto"
              />
            </div>
            <div className="mb-2">
              <span className="block text-gray-500 font-semibold">Title:</span>
              <span className="block text-lg font-bold text-purple-700">
                {game.gameTitle}
              </span>
            </div>
            <div className="mb-2">
              <span className="block text-gray-500 font-semibold">Genre:</span>
              <span className="block text-lg">{game.genre}</span>
            </div>
            <div className="mb-2">
              <span className="block text-gray-500 font-semibold">
                Published Year:
              </span>
              <span className="block text-lg">{game.publishingYear}</span>
            </div>
            <div className="mb-2">
              <span className="block text-gray-500 font-semibold">Rating:</span>
              <span className="block text-lg text-yellow-500 font-bold">
                {game.rating}
              </span>
            </div>
            <div className="mb-2">
              <span className="block text-gray-500 font-semibold">Review:</span>
              <span className="block text-lg truncate">
                {game.reviewDescription}
              </span>
            </div>
            <div>
              <span className="block text-gray-500 font-semibold">Author:</span>
              <span className="block text-lg">{game.userName}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameWatchlist;
