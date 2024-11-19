import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-black">
      <div className="relative w-full h-full">
        <img src={hero_banner} alt="" className="w-full h-full" />
        <div className="absolute top-[21rem] left-16">
          <img src={hero_title} alt="" className="" />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;
