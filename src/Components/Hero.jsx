import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import Button from "./Button";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";
import TitleCards from "./TitleCards";

const Hero = () => {
  return (
    <div className="absolute bg-black top-0 w-full ">
      <div className="relative w-full max-h-[900px]">
        <img src={hero_banner} alt="" width={"100%"} className="top-0" />
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
            in madern Istanbul embarks on a quest to save the city from an
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
      <div className="absolute top-[90%] w-full bg-gradient-to-b from-transparent to-black to-5%">
      <TitleCards title={'Popular on Netflix'} type={'movie'} category={'now_playing'}/>
      <TitleCards title={'Must watch'} type={'movie'} category={'popular'}/>
      <TitleCards title={'Top Rated'} type={'movie'} category={'top_rated'}/>
      <TitleCards title={'Top Rated TV Shows'} type={'tv'} category={'top_rated'}/>
      <TitleCards title={'Popular TV'} type={'tv'} category={'popular'}/>
      </div>
    </div>
  );
};

export default Hero;
