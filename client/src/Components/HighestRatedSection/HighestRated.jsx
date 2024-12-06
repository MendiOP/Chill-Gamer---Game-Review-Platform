import React, { useEffect, useState } from "react";
import HighestCard from "./HighestCard";

const HighestRated = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const sortedGames = data.sort((a, b) => b.rating - a.rating);
        setGames(sortedGames);
      });
  }, []);

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
