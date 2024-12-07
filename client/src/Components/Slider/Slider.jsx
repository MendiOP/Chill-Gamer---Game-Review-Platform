import React from "react";
import { Slide } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ImageSlider = () => {
  const sliderData = [
    {
      id: 1,
      image: "https://i.ibb.co/Ns5Bxng/s1.jpg",
      title: "Red Dead Redemption 2 (RDR2)",
      description:
        "An immersive Western-themed action-adventure game with a gripping narrative.",
    },
    {
      id: 2,
      image: "https://i.ibb.co/7Sd4Fh5/s2.jpg",
      title: "Cyberpunk 2077",
      description:
        "A futuristic open-world RPG set in a dystopian cybernetic society.",
    },
    {
      id: 3,
      image: "https://i.ibb.co/cyKBDMy/s3.jpg",
      title: "Forza Horizon",
      description:
        "A dynamic open-world racing series offering stunning visuals and thrilling driving experiences.",
    },
    {
      id: 4,
      image: "https://i.ibb.co/5nmHy04/s4.jpg",
      title: "God of War",
      description:
        "A mythological action-adventure journey of Kratos battling gods and monsters.",
    },
    {
      id: 5,
      image: "https://i.ibb.co/wBDVHWy/s5.jpg",
      title: "Call of Duty: Modern Warfare (COD MW)",
      description:
        "A fast-paced FPS with intense campaigns and competitive multiplayer modes.",
    },
    {
      id: 6,
      image: "https://i.ibb.co/6FRRy9S/s6.jpg",
      title: "The Forest",
      description:
        "A survival horror game where you fend off cannibals and explore mysterious caves.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slide triggerOnce>
      <div className="max-w-4xl mx-auto my-8">
        <h2 className="text-center text-3xl font-bold mb-6">
          Discover Exciting Games to Play!
        </h2>
        <Slider {...sliderSettings}>
          {sliderData.map((item) => (
            <div key={item.id} className="p-4 text-faltu">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-teal-700 dark:text-teal-500">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-faltu">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Slide>
  );
};

export default ImageSlider;
