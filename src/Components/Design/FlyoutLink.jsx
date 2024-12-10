import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Movies, Popular, TvShows } from "./NavDesign";
import { AnimatePresence, motion } from "framer-motion";

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = open && FlyoutContent;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-full w-fit"
    >
      <Link href={href} className="relative text-white text-sm ml-4">
        {children}
        <span
          style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ x: "-45%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12  text-white"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black/90" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const BrowsingContent = () => {
  return (
    <div className="w-[180px] flex flex-col text-center border border-gray-600">
      <ul>
        <Link to={"/"} >
          <li className={`${Home()} pb-[15px] pt-[15px] bg-black/70 hover:bg-black/60`}>Home</li>
        </Link>
        <Link to={`/tvshows`}>
          <li className={`${TvShows()} pb-[15px] pt-[15px] bg-black/70 hover:bg-black/60`}>TV Shows</li>
        </Link>
        <Link to={"/movies"}>
          <li className={`${Movies()} pb-[15px] pt-[15px] bg-black/70 hover:bg-black/60`}>Movies</li>
        </Link>
        <Link to={"/popular"}>
          <li className={`${Popular()} pb-[15px] pt-[15px] bg-black/70 hover:bg-black/60`}>New & Popular</li>
        </Link>
        <li className="pb-[15px] pt-[15px] text-slate-300 text-sm font-sm cursor-pointer hover:text-slate-400 ease-in-out duration-300 bg-black/70 hover:bg-black/60">
          My List
        </li>
        <li className="pb-[30px] pt-[15px] text-slate-300 text-sm font-sm cursor-pointer hover:text-slate-400 ease-in-out duration-300 bg-black/70 hover:bg-black/60">
          Browse by Languages
        </li>
      </ul>
    </div>
  );
};

export default FlyoutLink;
export { BrowsingContent };
