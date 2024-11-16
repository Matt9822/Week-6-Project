export function getActiveClass(path) {
  return window.location.pathname === path ? "text-slate-300 text-lg" : "white";
}

export const Home = () => getActiveClass("/");
export const Movies = () => getActiveClass("/movies");
export const TvShows = () => getActiveClass("/tvshows");
export const Popular = () => getActiveClass("/popular");

