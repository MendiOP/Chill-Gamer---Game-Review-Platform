import React, { useState } from "react";

const GameComparisonSlider = ({ game1, game2 }) => {
  const [ratings, setRatings] = useState({
    graphics: { game1: 3, game2: 3 },
    story: { game1: 3, game2: 3 },
    gameplay: { game1: 3, game2: 3 },
    replayability: { game1: 3, game2: 3 },
  });

  const handleRatingChange = (category, game, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: {
        ...prevRatings[category],
        [game]: value,
      },
    }));
  };

  const calculateOverallRating = (game) => {
    const total = Object.values(ratings).reduce(
      (sum, category) => sum + category[game],
      0
    );
    return (total / Object.values(ratings).length).toFixed(2);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-faltu dark:text-faltu text-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-center p-6 bg-gray-100 dark:bg-faltu">
        <h2 className="text-2xl font-semibold dark:text-teal-400 text-center sm:text-left">
          {game1.title} vs {game2.title}
        </h2>
      </div>

      <div className="p-6">
        {["graphics", "story", "gameplay", "replayability"].map((category) => (
          <div key={category} className="mb-6">
            <h3 className="text-xl font-medium text-gray-700 dark:text-teal-400">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-between mt-2">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <span>{game1.title}</span>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={ratings[category].game1}
                  onChange={(e) =>
                    handleRatingChange(
                      category,
                      "game1",
                      parseInt(e.target.value)
                    )
                  }
                  className="w-full sm:w-32"
                />
                <span>{ratings[category].game1}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span>{game2.title}</span>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={ratings[category].game2}
                  onChange={(e) =>
                    handleRatingChange(
                      category,
                      "game2",
                      parseInt(e.target.value)
                    )
                  }
                  className="w-full sm:w-32"
                />
                <span>{ratings[category].game2}</span>
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col sm:flex-row justify-between mt-6 border-t-2 pt-6">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h4 className="text-lg font-semibold text-gray-600 dark:text-faltu">
              Overall Rating
            </h4>
            <div className="bg-green-200 rounded-full py-2 dark:text-amber-900 px-4 text-xl font-semibold">
              {calculateOverallRating("game1")} / 5
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-gray-600 dark:text-faltu">
              Overall Rating
            </h4>
            <div className="bg-blue-200 rounded-full py-2 dark:text-amber-900 px-4 text-xl font-semibold">
              {calculateOverallRating("game2")} / 5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameComparisonSlider;
