import Hero from "../Components/Hero"
import Nav from "../Components/Nav"

const Popular = () => {
  return (
    <div className="bg-black">
      <Nav />
      <Hero />
      <div className="text-white text-xl">Popular</div>
    </div>
  )
}

export default Popular