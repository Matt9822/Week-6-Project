import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import { useState } from "react";
import { Popular, Movies, TvShows, Home, } from "./Design/NavDesign";

const search = () => {
  [openSearch, setOpenSearch] = useState(false);
} 

const Nav = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to={"/"}>
          <img src={logo} alt="Fire" height={"10px"} width={"65px"} />
          </Link>
          <ul className="flex">
            <Link to={"/"} className="flex items-center h-7 ml-5 mr-4 ">
              <li className={Home()}>Home</li>
            </Link>
            <Link to={"/movies"} className="mr-4">
              <li className={Movies()}>Movies</li>
            </Link>
            <Link to={`/tvshows`} className="mr-4">
              <li className={TvShows()}>TV Shows</li>
            </Link>
            <Link to={"/popular"} className="mr-4">
            <li className={Popular()}>Popular</li>
            </Link>
          </ul>
        </div>
        <div className="flex">
          <div className="hover:cursor-pointer" onClick={() => {search()}}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
