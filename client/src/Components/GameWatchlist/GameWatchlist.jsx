import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../AuthContext/AuthContext";
import sad from "../../assets/sad.gif";

const GameWatchlist = () => {
  const [watchListdatas, setWatchListDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/watchlist")
      .then((res) => res.json())
      .then((data) => {
        setWatchListDatas(data);
      })
      .catch((error) => console.error("Error fetching watchlist:", error))
      .finally(() => setLoading(false));
  }, []);

  // Filter the user's watchlist
  const usersWatchList = watchListdatas.filter(
    (game) => game.myEmail === user.email
  );

  if (loading) {
    // Show loading spinner while data is being fetched
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Game Watchlist | Chill Gamer</title>
        </Helmet>
        <div className="text-center">
          <div className="animate-spin rounded-full border-4 border-t-4 border-purple-500 h-12 w-12 mx-auto"></div>
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
      <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-faltu">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Game Watchlist | Chill Gamer</title>
        </Helmet>
        <div className="text-center p-8 bg-white border border-gray-200 rounded-xl shadow-lg max-w-lg">
          <h2 className="text-purple-600 font-extrabold text-2xl md:text-3xl mb-6">
            No Games Found!
          </h2>
          <img
            src={sad}
            alt="sad"
            className="w-24 md:w-32 rounded-full mx-auto mb-6"
          />
          <p className="text-gray-600 text-lg md:text-xl">
            Your watchlist is empty. Start exploring and add games to it!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto  mt-10 bg-faltu">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Game Watchlist | Chill Gamer</title>
      </Helmet>
      <h1 className="text-center font-bold text-3xl text-faltu mt-6">
        Your Watchlist: Favorites
      </h1>
      {/* Desktop Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse mt-6 bg-faltu shadow-lg rounded-lg hidden md:table">
          <thead className="bg-teal-500">
            <tr>
              <th className="px-6 py-5 text-center text-lg text-white">
                Game Cover
              </th>
              <th className="px-6 py-5 text-center text-lg text-white">
                Game Title
              </th>
              <th className="px-6 py-5 text-center text-lg text-white">
                Genre
              </th>
              <th className="px-6 py-5 text-center text-lg text-white">
                Published Year
              </th>
              <th className="px-6 py-5 text-center text-lg text-white">
                Rating
              </th>
              <th className="px-6 py-5 text-center text-lg text-white hidden lg:table-cell">
                Review
              </th>
              <th className="px-6 py-5 text-center text-lg text-white">
                Author
              </th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {usersWatchList.map((game) => (
              <tr
                key={game._id}
                className="border-b hover:bg-gray-200 dark:hover:bg-[#005F73] transition-all"
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
                <td className="px-6 py-5 text-center max-w-xs truncate hidden lg:table-cell">
                  {game.reviewDescription}
                </td>
                <td className="px-6 py-5 text-center">{game.userName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden p-4">
        {usersWatchList.map((game) => (
          <div
            key={game._id}
            className="bg-white border border-gray-300 rounded-xl shadow-md p-6 mb-6 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col items-center mb-4">
              <img
                src={game.gameCover}
                alt={game.gameTitle}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-bold text-purple-700">
                {game.gameTitle}
              </h3>
            </div>
            <div className="space-y-2">
              <div>
                <span className="block text-gray-500 font-semibold">
                  Genre:
                </span>
                <span className="block text-lg">{game.genre}</span>
              </div>
              <div>
                <span className="block text-gray-500 font-semibold">
                  Published Year:
                </span>
                <span className="block text-lg">{game.publishingYear}</span>
              </div>
              <div>
                <span className="block text-gray-500 font-semibold">
                  Rating:
                </span>
                <span className="block text-lg text-yellow-500 font-bold">
                  {game.rating}
                </span>
              </div>
              <div>
                <span className="block text-gray-500 font-semibold">
                  Review:
                </span>
                <span className="block text-sm line-clamp-3">
                  {game.reviewDescription}
                </span>
              </div>
              <div>
                <span className="block text-gray-500 font-semibold">
                  Author:
                </span>
                <span className="block text-lg">{game.userName}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameWatchlist;
