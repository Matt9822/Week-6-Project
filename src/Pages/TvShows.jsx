import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Nav from "../Components/Nav";

const TvShows = () => {
  const titleCardsConfig = [

    { title: "Top Rated TV Shows", type: "tv", category: "top_rated" },
    { title: "Popular TV", type: "tv", category: "popular" },
  ]
  return (
    <div className="bg-black">
      <Nav />
      <Hero titleCardsConfig={titleCardsConfig}/>
      <Footer />
    </div>
  );
};

export default TvShows;
