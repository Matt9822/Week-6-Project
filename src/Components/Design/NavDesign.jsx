
export function getActiveClass(path) {
  return window.location.pathname === path ? "text-white text-sm font-bold" : "text-slate-300 text-sm font-medium hover:text-slate-400 ease-in-out duration-500";
}

export const Home = () => getActiveClass("/");
export const Movies = () => getActiveClass("/movies");
export const TvShows = () => getActiveClass("/tvshows");
export const Popular = () => getActiveClass("/popular");

