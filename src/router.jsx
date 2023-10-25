

import {
  createBrowserRouter,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Details from './pages/Details/Details.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/topic/:id",
    element: <Details />,
  },
]);
