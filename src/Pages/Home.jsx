import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import { useEffect } from "react";

const Home = () => {
  const titleCardsConfig = [
    { title: "Popular on Netflix", type: "movie", category: "now_playing" },
    { title: "Must watch", type: "movie", category: "popular" },
    { title: "Top Rated", type: "movie", category: "top_rated" },
    { title: "Top Rated TV Shows", type: "tv", category: "top_rated" },
    { title: "Popular TV", type: "tv", category: "popular" },
  ]
     useEffect(() => {
        document.title = "Netflix";
      }, []);
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Nav />
      <Hero titleCardsConfig={titleCardsConfig}/>
      <Footer />
    </div>
  );
};

export default Home;
