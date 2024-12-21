import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
// import TitleCards from "../Components/TitleCards";

const Home = () => {
  return (
    <div className="h-screen bg-black relative">
      <Nav />
      <Hero />
      {/* <div className="">
      <TitleCards />
      </div> */}
    </div>
  );
};

export default Home;
