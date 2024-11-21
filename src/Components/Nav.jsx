import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import { useState } from "react";
import { Popular, Movies, TvShows, Home } from "./Design/NavDesign";

const search = () => {
  [openSearch, setOpenSearch] = useState(false);
};

//Scroll watcher to make the header transparent when at the top of the hero

const primaryHeader = document.querySelector("header");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(() => {
  primaryHeader.classList.toggle('sticking')
});

navObserver.observe(scrollWatcher)


const Nav = () => {
  return (
    <header className="bg-black z-10 sticky top-0">
      <div className="flex justify-between items-center h-[68px]">
        <div className="flex items-center justify-center">
          <Link to={"/"}>
            <img
              src={logo}
              alt="Netflix"
              height={"10px"}
              width={"93px"}
              className="ml-[60px]"
            />
          </Link>
          <ul className="flex items-center">
            <Link to={"/"} className="ml-11 mr-5">
              <li className={Home()}>Home</li>
            </Link>
            <Link to={`/tvshows`} className="mr-5 text-sm">
              <li className={TvShows()}>TV Shows</li>
            </Link>
            <Link to={"/movies"} className="mr-5">
              <li className={Movies()}>Movies</li>
            </Link>
            <Link to={"/popular"} className="mr-5">
              <li className={Popular()}>New & Popular</li>
            </Link>
            <li className="mr-5 text-slate-300 text-sm font-medium cursor-pointer hover:text-slate-400 ease-in-out duration-500">My List</li>
            <li className="mr-5 text-slate-300 text-sm font-medium cursor-pointer hover:text-slate-400 ease-in-out duration-500">Browse by Languages</li>
          </ul>
        </div>
        <div className="flex">
          <div
            className="hover:cursor-pointer"
            onClick={() => {
              search();
            }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
