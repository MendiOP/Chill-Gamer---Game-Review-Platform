import React, { useEffect, useState } from "react";
import sad from "../../assets/sad.gif";
import HighestCard from "./HighestCard";

const HighestRated = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://chill-gamer-server-omega-orcin.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => setLoading(false), 500);
        const sortedGames = data.sort((a, b) => b.rating - a.rating);
        setGames(sortedGames);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      });
  }, []);

  // to show nothing in default
  if (games.length === 0) {
    return (
      <div className="text-center text-2xl mt-16 p-8 bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md max-w-lg mx-auto">
        <div className="text-purple-600 font-bold text-3xl mb-6">
          No Games &#128542;
        </div>
        <img
          src={sad}
          alt="sad"
          className="w-1/2 rounded-xl mx-auto mb-6" // Adjust size and spacing for the image
        />
        <div className="text-gray-700 text-xl font-semibold">
          There is no Games available at the moment. Please check back later.
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        <p className="ml-4 text-lg font-semibold">Loading data...</p>
      </div>
    );
  }

  return (
    <div className="space-y-10 mt-5">
      <h1 className="font-bold text-3xl text-center">Highest Rated Games</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => {
          return (
            <HighestCard
              key={game._id}
              id={game._id}
              gameTitle={game.gameTitle}
              rating={game.rating}
              gameCover={game.gameCover}
              releaseDate={game.publishingYear}
            ></HighestCard>
          );
        })}
      </div>
    </div>
  );
};

export default HighestRated;
