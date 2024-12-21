import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TitleCards = ({ title, category, type }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    try{

      const response  = await fetch(
        `https://api.themoviedb.org/3/${type}/${category}now_playing?language=en-US&page=1`,
        {
           method: "GET",
           headers: {
             accept: "application/json",
             Authorization:
               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2E1OWE0NzBlYzI4NWUyODA4Y2MxZjA0NmZlYmY1YiIsIm5iZiI6MTczMzc2NTM2Ni4xMjMwMDAxLCJzdWIiOiI2NzU3MjhmNjk4YzMzODkyYTI1NTlkNjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Btwva86AOZTWYx-ET-E47oPxKiXGm6lSSdq5GPGa2ak",
           },
         }
      )
      const data = await response.json();
      console.log(data.results);
      setApiData(data.results);
    }catch(err){
      setError(err)
    } finally{
      setLoading(false)
    }
  }


  useEffect(() => {
    fetchData();
  }, []);
  
  useEffect(() => {
    if (error) {
      navigate("/NotFound");
    }
  },[error, navigate]);
  
  
  if (loading) return <p>hi</p>;

  return (
  <div className="relative h-full px-[60px] w-full max-w-full overflow-x-scroll scrollbar-hide pb-[40px]">
  <h1 className="text-3xl text-white ml-2">{title}</h1>
  <div className="flex gap-4 mt-4 whitespace-nowrap">
    {apiData.map((movie) => {
      return (
        <div key={movie.id} className="inline-flex min-w-[300px] px-2">
          <div className="relative border rounded border-gray-900">
          <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" width='300px' className="rounded cursor-pointer"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
          <p className="text-white absolute bottom-[10px] right-[10px] text-wrap ml-3">{movie.title}</p>
          </div>
          </div>
        </div>
      );
    })}
  </div>
</div>
  );
};

export default TitleCards;
