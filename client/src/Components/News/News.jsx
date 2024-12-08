import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  const objects = [
    {
      title: "Trump Tariffs Could Be Bad News for the Switch 2 ",
      subtitle:
        "The Nintendo Switch 2's price could be affected boy President-Elect Donald Trump's proposed tariff policies, sparking industry concern",
      tag: "Breaking News",
      sourceName: "Game Rant",
      sourceAuthor: "Matthew Schomer",
      sourceDate: "November 16, 2024 ",
      buttonText: "Learn More",
      imageUrl: "https://i.ibb.co.com/KxrXBHc/n4.jpg",
      readMoreLink:
        "https://opencritic.com/news/9412/trump-tariffs-could-be-bad-news-for-the-switch-2",
    },
    {
      title:
        "Live-Action Splinter Cell Movie Not Happening, Producer Says | TechRaptor",
      subtitle:
        "A producer on the live-action Splinter Cell movie, which was in development for a number of years, has confirmed that the project has been canceled.",
      tag: "Exclusive",
      sourceName: "TechRaptor ",
      sourceAuthor: "Emily Roberts",
      sourceDate: "November 16, 2024 ",
      buttonText: "View Details",
      imageUrl: "https://i.ibb.co.com/F4L2PvS/n3.jpg",
      readMoreLink:
        "https://opencritic.com/news/9416/live-action-splinter-cell-movie-not-happening-producer-says-techraptor",
    },
    {
      title: "Cyberpunk 2077 Sequel Teased by CD Projekt Red",
      subtitle:
        "A brief teaser hints at what fans can expect from the next installment in the Cyberpunk universe.",
      tag: "Announcement",
      sourceName: "Polygon",
      sourceAuthor: "Michael Lee",
      sourceDate: "December 6, 2024",
      buttonText: "Read More",
      imageUrl: "https://i.ibb.co.com/WcDhzZZ/n2.jpg",
      readMoreLink:
        "https://opencritic.com/news/9417/call-of-duty-black-ops-6-players-mock-new-skin",
    },
    {
      title: "Top 10 Indie Games to Watch Out For in 2025",
      subtitle:
        "These upcoming indie games are set to captivate players with unique stories and mechanics.",
      tag: "Trending",
      sourceName: "Kotaku",
      sourceAuthor: "Sarah Walker",
      sourceDate: "December 7, 2024",
      buttonText: "Discover More",
      imageUrl: "https://i.ibb.co.com/Cw9RP21/n1.jpg",
      readMoreLink:
        "https://opencritic.com/news/9414/the-riot-shield-has-mysteriously-disappeared-from-call-of-duty-warzone",
    },
  ];

  return (
    <div className="flex flex-wrap">
      {objects.map((obj, index) => (
        <NewsCard key={index} obj={obj} index={index} />
      ))}
    </div>
  );
};

export default News;
