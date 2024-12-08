import React from "react";
import GameComparisonSlider from "./GameComparisonSlider";

const Comparison = () => {
  const game1 = {
    title: "Red Dead Redemption 2",
    description:
      "An open-world western action-adventure game set in the late 1800s.",
  };

  const game2 = {
    title: "Grand Theft Auto V",
    description:
      "An action-adventure game that takes place in a fictional version of Southern California.",
  };

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-faltu text-white">
      <header className="bg-gray-900 p-6 text-center">
        <h1 className="text-4xl font-semibold">Game Comparison</h1>
        <p className="mt-2">Compare the best games side by side!</p>
      </header>
      <main className="py-8 dark:bg-faltu">
        <GameComparisonSlider game1={game1} game2={game2} />
      </main>
    </div>
  );
};

export default Comparison;
