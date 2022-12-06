import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import LayoutOther from "../components/layout/LayoutOther";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Game from "../pages/gameDetails/GameRps";
import LandingPages from "../pages/landing/landing";
import Notfound from "../pages/notfound/Notfound";

const Router = (isAUTH) => {
  return [
    {
      path: "apps",
      element: isAUTH ? <Layout /> : <Navigate to="/auth/login" />,
      children: [{ path: "game", element: <Game /> }],
    },
    {
      path: "/auth",
      element: !isAUTH ? <LayoutOther /> : <Navigate to="/" />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "/",
      element: <LandingPages />,
    },
    { path: "404", element: <Notfound /> },
    { path: "*", element: <Navigate to="/404" /> },
  ];
};
export default Router;

// export default routes
