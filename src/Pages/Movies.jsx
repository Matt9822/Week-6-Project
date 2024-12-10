import Hero from "../Components/Hero"
import Nav from "../Components/Nav"

const Movies = () => {
  return (
    <div className="bg-black">
      <Nav />
      <Hero />
      <div className="text-white text-xl">Movies</div>
    </div>
  )
}

export default Movies