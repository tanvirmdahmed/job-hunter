import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Layout/Home";
import FrontPage from "./components/FrontPage/FrontPage";
import Statistics from "./components/Statistics/Statistics";
import AppliedJob from "./components/AppliedJob/AppliedJob";
import Blog from "./components/Blog/Blog";
import Error404 from "./components/Error404/Error404";
import ViewDetails from "./components/ViewDetails/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <FrontPage></FrontPage>,
        loader: () => fetch('/jobDetails.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied_job',
        element: <AppliedJob></AppliedJob>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/job_details/:id',
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch('/jobDetails.json')
      }
    ]
  },
  {
    path: '/*',
    element: <Error404></Error404>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);