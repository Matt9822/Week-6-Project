import React from "react";
import PropTypes from "prop-types";
import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import Button from "./Button";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";
import TitleCards from "./TitleCards";

const Hero = ({ titleCardsConfig }) => {
  return (
    <div className="relative bg-black w-full">
      <div className="relative w-full max-h-[900px]">
        <img src={hero_banner} alt="" width={"100%"} className="relative top-[-65px]" />
        <div className="absolute top-[25%] left-[6%] w-1/2 max-[1100px]:top-[20%]">
          <img
            src={hero_title}
            alt=""
            width={"100%"}
            height={"100%"}
            className="max-w-[480px] mb-8 max-[1100px]:w-[75%] w-full"
          />
          <p className="white w-full max-w-[590px] max-[1100px]:w-[90%] max-[1100px]:text-xs">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="flex gap-4 mt-5 ">
            <Button
              classname={
                "bg-white rounded-lg p-4 flex items-center h-[50px] text-xl max-[680px]:h-[30px] cursor-pointer"
              }
            >
              <img
                src={play_icon}
                alt=""
                width={"30px"}
                className="mr-2 max-[680px]:w-[20px]"
              />
              Play
            </Button>
            <Button
              classname={
                "bg-[#6D6D6EB3]/100 rounded-lg p-4 w-full max-w-[166px] flex items-center h-[50px] text-white text-xl max-[680px]:h-[30px] cursor-pointer"
              }
            >
              <img
                src={info_icon}
                alt=""
                width={"40px"}
                className="mr-2 max-[680px]:w-[20px]"
              />
              More Info
            </Button>
          </div>
        </div>
      </div>
      <div className="h-full w-full">
        <div className="relative top-[-15%] z-1 bg-gradient-to-b from-transparent to-black to-[10%] max-lg:top-[-10%] max-md:top-[-5%]">
          {Array.isArray(titleCardsConfig) && titleCardsConfig.length > 0 ? (
            titleCardsConfig.map((config, index) => (
              <TitleCards key={index} {...config} />
            ))
          ) : (
            <p>No title cards available</p>
          )}
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  titleCardsConfig: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Hero;
