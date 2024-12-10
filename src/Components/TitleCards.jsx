import { useEffect, useState } from "react";
import cards_data from "../assets/cards/Cards_data";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2E1OWE0NzBlYzI4NWUyODA4Y2MxZjA0NmZlYmY1YiIsIm5iZiI6MTczMzc2NTM2Ni4xMjMwMDAxLCJzdWIiOiI2NzU3MjhmNjk4YzMzODkyYTI1NTlkNjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Btwva86AOZTWYx-ET-E47oPxKiXGm6lSSdq5GPGa2ak",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="absolute top-[80%] h-full bg-gradient-to-b from-transparent to-black to-10% px-[60px]">
      <h1 className="text-2xl text-white">Popular on Netflix</h1>
      <div className="flex gap-4 mt-4 overflow-x-scroll ">
        {cards_data.map((card, index) => {
          return (
            <div key={index} className="relative w-[240px]">
              <img src={card.image} alt="" width='240px' className="rounded cursor-pointer"/>
              <p className="text-white absolute bottom-[10px] right-[10px]">{card.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default TitleCards;
