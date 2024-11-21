import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-black">
      <div className="relative w-full h-full">
        <img src={hero_banner} alt="" className="w-full h-full" />
        <div className="absolute top-[39%] left-[6%]">
          <img
            src={hero_title}
            alt=""
            className="w-full max-w-[480px] h-full mb-8"
          />
          <p className="white w-full max-w-[590px]">
            Discovering his ties to a secret ancient order, a young man living
            in madern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div>
            <Button className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
