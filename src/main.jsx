import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Popular from "./Pages/Popular";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import TvShows from "./Pages/TvShows";
import NotFound from "./Pages/NotFound";
import Results from "./Pages/Results";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/tvshows",
    element: <TvShows />,
  },
  {
    path: "/popular",
    element: <Popular />
  },
  {
    path: "/results",
    element: <Results />
  },
  {
    path: "/NotFound",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
