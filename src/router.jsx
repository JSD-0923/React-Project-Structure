

import {
  createBrowserRouter,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Details from './pages/Details/Details.jsx';
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
 
  },
  {
    path: "/topic/:id",
    element: <Details />,
    errorElement: <div>404</div>,
  },
]);


