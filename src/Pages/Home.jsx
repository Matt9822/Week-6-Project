import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import TitleCards from "../Components/TitleCards";

const Home = () => {
  return (
    <div className="h-screen bg-black relative">
      <Nav />
      <Hero />
      {/* <TitleCards /> */}
    </div>
  );
};

export default Home;
