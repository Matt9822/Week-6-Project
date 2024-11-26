export function getActiveClass(path) {
  return window.location.pathname === path ? "text-white text-sm font-bold transition ease-in-out duration-500" : "text-slate-300 text-sm font-sm hover:text-slate-400 transition ease-in-out duration-500";
}

export const Home = () => getActiveClass("/");
export const Movies = () => getActiveClass("/movies");
export const TvShows = () => getActiveClass("/tvshows");
export const Popular = () => getActiveClass("/popular");

