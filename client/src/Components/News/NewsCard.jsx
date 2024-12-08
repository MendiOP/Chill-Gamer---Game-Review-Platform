import React from "react";

const NewsCard = ({ obj, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="w-full lg:w-full p-4">
      {" "}
      {/* Full width on all screens */}
      <div
        className={`bg-white border rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row ${
          isEven ? "" : "lg:flex-row-reverse"
        }`}
      >
        {/* Image Section */}
        <img
          src={obj.imageUrl}
          alt={obj.title}
          className="w-full h-full lg:w-1/2 object-cover" // Image takes full width on small screens, half on large screens
        />

        {/* Content Section */}
        <div className="p-4 flex-1 bg-faltu space-y-6">
          <span className="text-lg text-green-600 font-bold">{obj.tag}</span>
          <h2 className="mt-2 text-3xl font-semibold text-gray-800 dark:text-faltu">
            {obj.title}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-teal-500 text-lg">
            {obj.subtitle}
          </p>
          <p className="mt-2 text-base text-blue-600">
            from{" "}
            <a href="#" className="hover:underline">
              {obj.sourceName}
            </a>{" "}
            (Written by {obj.sourceAuthor}) | {obj.sourceDate}
          </p>
          <a
            href={obj.readMoreLink}
            className="mt-4 inline-block bg-blue-600 text-white text-center py-2 px-4 rounded-lg shadow hover:bg-blue-500"
          >
            {obj.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
