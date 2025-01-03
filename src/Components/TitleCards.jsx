import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const TitleCards = ({ title, category, type }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const fetchData = async () => {
    try {
      const apiUrl = `https://api.themoviedb.org/3/${type}/${category}?language=en-US&page=1`;
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2E1OWE0NzBlYzI4NWUyODA4Y2MxZjA0NmZlYmY1YiIsIm5iZiI6MTczMzc2NTM2Ni4xMjMwMDAxLCJzdWIiOiI2NzU3MjhmNjk4YzMzODkyYTI1NTlkNjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Btwva86AOZTWYx-ET-E47oPxKiXGm6lSSdq5GPGa2ak",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.results);
      setApiData(data.results);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type, category]);

  useEffect(() => {
    if (error) {
      console.error("Navigating to /NotFound due to error:", error);
      navigate("/NotFound");
    }
  }, [error, navigate]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -1200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 1200, behavior: "smooth" });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div className="relative h-full px-[60px] w-full max-w-full overflow-hidden pb-[45px]">
      <h1 className="text-3xl text-white ml-2">{title}</h1>
      <div className="flex items-center">
        <button onClick={scrollLeft} className="text-white text-2xl p-2 ">
          &#9664;
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 mt-4 whitespace-nowrap overflow-x-scroll scrollbar-hide"
        >
          {Array.isArray(apiData) && apiData.length > 0 ? (
            apiData.map((movie) => (
              <div key={movie.id} className="inline-flex min-w-[300px] px-2">
                <div className="relative border rounded border-gray-900">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                    width="300px"
                    className="rounded cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
                    <p className="text-white absolute bottom-[10px] right-[10px] text-wrap ml-3">
                      {movie.title ? movie.title : movie.name}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
        <button onClick={scrollRight} className="text-white text-2xl p-2">
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default TitleCards;