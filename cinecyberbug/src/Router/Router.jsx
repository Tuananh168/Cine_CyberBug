import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Checkout from "../page/Checkout/Checkout";
import DetailFilm from "../page/DetailFilm/DetailFilm";
import Home from "../page/home/Home";

const Router = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/detail/:id",
          element: <DetailFilm />,
        },
        {
          path: "/checkout/:id",
          element: <Checkout />,
        },
      ],
    },
  ]);
  return routing;
};

export default Router;
