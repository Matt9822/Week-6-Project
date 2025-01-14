import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import netflix_spinner from "../assets/netflix_spinner.gif";

const Results = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState("none");
  const [isTimeoutDone, setIsTimeoutDone] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query");

    if (query) {
      setLoading(true);
      const timeoutId = setTimeout(async () => {
        try {
          const apiSearch = `https://api.themoviedb.org/3/search/collection?query=${query}&include_adult=false&language=en-US&page=1`;
          const response = await fetch(apiSearch, {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2E1OWE0NzBlYzI4NWUyODA4Y2MxZjA0NmZlYmY1YiIsIm5iZiI6MTczMzc2NTM2Ni4xMjMwMDAxLCJzdWIiOiI2NzU3MjhmNjk4YzMzODkyYTI1NTlkNjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Btwva86AOZTWYx-ET-E47oPxKiXGm6lSSdq5GPGa2ak",
            },
          });
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
          const data = await response.json();
          setSearchResults(data.results);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
          setIsTimeoutDone(true);
        }
        document.title = `Results for "${query}" - Netflix`;
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [location.search]);

  // Function to handle sorting
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // Function to sort search results
  const sortedResults = () => {
    if (sortOption === "a-z") {
      return [...searchResults].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "z-a") {
      return [...searchResults].sort((a, b) => b.name.localeCompare(a.name));
    }
    return searchResults;
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="bg-gray-950">
        <Nav />
        <div>
        {isTimeoutDone && ( // Conditionally render the div based on the state variable
        <div className="flex flex-col-reverse items-center justify-center">
          <div className="mb-10">
            <select
              id="filterOptions"
              className="h-8 w-[120px] rounded-lg"
              onChange={handleSortChange}
            >
              <option value="none">Sort By...</option>
              <option value="a-z">Title:(A-Z)</option>
              <option value="z-a">Title:(Z-A)</option>
            </select>
          </div>
          <div className="w-[150px]">
            <h1 className="text-white text-4xl font-bold text-center mt-10 mb-5">
              Results
            </h1>
          </div>
        </div>
      )}
          {loading && (
            <div className="flex items-center justify-center text-2xl mt-10">
              <img src={netflix_spinner} alt="" className="mt-[200px] mb-[300px]" />
            </div>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {sortedResults()
            .filter((result) => result.backdrop_path) // Filter out results without a backdrop_path
            .map((result) => (
              <div key={result.id} className="text-white m-4">
                <div className="relative mb-5 border border-gray-900 rounded-[3px] overflow-hidden">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
                    alt={result.name}
                    width={350}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
                    <p className="absolute bottom-1 left-2 text-xl mt-2  bg-gradient-to-t from-black to-transparent">
                      {result.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Results;
