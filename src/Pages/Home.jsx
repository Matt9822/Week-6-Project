import Hero from "../Components/Hero";
import Nav from "../Components/Nav";

const Home = () => {
  const titleCardsConfig = [
    { title: "Popular on Netflix", type: "movie", category: "now_playing" },
    { title: "Must watch", type: "movie", category: "popular" },
    { title: "Top Rated", type: "movie", category: "top_rated" },
    { title: "Top Rated TV Shows", type: "tv", category: "top_rated" },
    { title: "Popular TV", type: "tv", category: "popular" },
  ]
  return (
    <div className="h-screen bg-black relative">
      <Nav />
      <Hero />
    </div>
  );
};

export default Home;
