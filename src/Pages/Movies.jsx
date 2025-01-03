import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import Nav from "../Components/Nav"

const Movies = () => {
  const titleCardsConfig = [
    { title: "Popular on Netflix", type: "movie", category: "now_playing" },
    { title: "Must watch", type: "movie", category: "popular" },
    { title: "Top Rated", type: "movie", category: "top_rated" },
  ]
  return (
    <div className="bg-black">
      <Nav />
      <Hero titleCardsConfig={titleCardsConfig}/>
      <Footer />
    </div>
  )
}

export default Movies