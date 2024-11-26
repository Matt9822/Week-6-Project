import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell, faCaretDown, } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import profile_img from "../assets/profile_img.png";
import { useState, useEffect } from "react";
import { Popular, Movies, TvShows, Home} from "./Design/NavDesign";
import { FlyoutLink } from "./Design/NavFlyOutMenu";

const Nav = () => {
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      const primaryHeader = document.querySelector("header");
      const scrollWatcher = document.createElement("div");
      scrollWatcher.setAttribute("data-scroll-watcher", "");
      primaryHeader.before(scrollWatcher);

      const navObserver = new IntersectionObserver(
        (entries) => {
          primaryHeader.classList.toggle(
            "sticking",
            !entries[0].isIntersecting
          );
        },
        { rootMargin: "80px 0px 0px 0px" }
      );

      navObserver.observe(scrollWatcher);
    }
  }, []);

  return (
    <header className="primary-header transition-all ease-in-out duration-[400ms]">
      <div className="flex justify-between items-center h-[68px]">
        <div className="flex items-center justify-center">
          <Link to={"/"} className="max-[1100px]:mr-6">
            <img
              src={logo}
              alt="Netflix"
              height={"10px"}
              width={"93px"}
              className="ml-[60px] max-[1100px]:ml-4"
            />
          </Link>
          <div className={`items-center cursor-pointer hidden max-[1100px]:flex`}>
            <p className="text-white text-sm ml-4">Browse</p>
            <FontAwesomeIcon icon={faCaretDown} className="text-white ml-2"/>
            <FlyoutLink>Browse</FlyoutLink>
          </div>
          <ul className="flex items-center">
            <Link to={"/"} className="ml-11 mr-5">
              <li className={`${Home()} max-[1100px]:hidden`}>Home</li>
            </Link>
            <Link to={`/tvshows`} className="mr-5 text-sm">
              <li className={`${TvShows()} max-[1100px]:hidden`}>TV Shows</li>
            </Link>
            <Link to={"/movies"} className="mr-5">
              <li className={`${Movies()} max-[1100px]:hidden`}>Movies</li>
            </Link>
            <Link to={"/popular"} className="mr-5">
              <li className={`${Popular()} max-[1100px]:hidden`}>New & Popular</li>
            </Link>
            <li className="mr-5 text-slate-300 text-sm font-sm cursor-pointer hover:text-slate-400 ease-in-out duration-500 max-[1100px]:hidden">
              My List
            </li>
            <li className="mr-5 text-slate-300 text-sm font-sm cursor-pointer hover:text-slate-400 ease-in-out duration-500 max-[1100px]:hidden">
              Browse by Languages
            </li>
          </ul>
        </div>
        <div className="flex">
          <div
            className="hover:cursor-pointer"
            onClick={() => {
              setOpenSearch(!openSearch);
            }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="white w-[20px] h-[20px] mt-1" />
          </div>
          <ul className="flex items-center">
            <li className="white mx-6">Kids</li>
            <li>
              <FontAwesomeIcon icon={faBell} className="text-white mr-6 h-5" />
            </li>
          </ul>
          <div className={`flex items-center cursor-pointer mr-10 `}>
            <img src={profile_img} alt="" className="mr-3" />
            <FontAwesomeIcon icon={faCaretDown} className="text-white hover:rotate-180 ease-in-out duration-500"/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
