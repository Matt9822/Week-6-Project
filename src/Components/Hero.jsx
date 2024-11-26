import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="absolute bg-black top-0 w-full ">
      <div className="relative w-full">
        <img src={hero_banner} alt="" width={"100%"} className="top-0" />
        <div className="absolute top-[39%] left-[6%]">
          <img
            src={hero_title}
            alt=""
            width={"100%"}
            height={"100%"}
            className="max-w-[480px] mb-8 max-[1100px]:w-[50%] "
          />
          <p className="white w-full max-w-[590px] max-[1100px]:max-w-[330px]">
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
