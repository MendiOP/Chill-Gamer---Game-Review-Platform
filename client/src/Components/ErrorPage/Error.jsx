import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Error!!</h1>

        <img
          src="https://i.ibb.co.com/56xDRTL/255824-P4-LS89-965.jpg"
          alt="Error Image"
          className="w-1/2 mx-auto mb-6 rounded-xl"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          <Link to="/">Go to Home Page</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
