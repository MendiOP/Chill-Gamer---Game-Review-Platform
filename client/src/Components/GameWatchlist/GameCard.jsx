import React from "react";

const GameCard = ({ gameData }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Game Details
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2">Attribute</th>
              <th className="px-4 py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2 font-medium">Game Cover</td>
              <td className="px-4 py-2">
                <img
                  src={gameData.gameCover}
                  alt={gameData.gameTitle}
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">Game Title</td>
              <td className="px-4 py-2">{gameData.gameTitle}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">Genre</td>
              <td className="px-4 py-2">{gameData.genre}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">Publishing Year</td>
              <td className="px-4 py-2">{gameData.publishingYear}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">Rating</td>
              <td className="px-4 py-2 text-yellow-500">{gameData.rating}</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 font-medium">Review Description</td>
              <td className="px-4 py-2">{gameData.reviewDescription}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">User Name</td>
              <td className="px-4 py-2">{gameData.userName}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">User Email</td>
              <td className="px-4 py-2">{gameData.userEmail}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">My Name</td>
              <td className="px-4 py-2">{gameData.myName}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">My Email</td>
              <td className="px-4 py-2">{gameData.myEmail}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameCard;
