import { BrowserRouter, useRoutes, useNavigate } from "react-router-dom";
import React from "react";

import Layout from "../components/layout";
import Home from "../pages/Home";
import CharacterDetails from "../pages/CharacterDetails";
import Film from "../pages/Film";

function MainRoutes() {
  let route = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "person", element: <CharacterDetails /> },
        { path: "films", element: <Film /> },
      ],
    },
  ]);
  return route;
}
const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
};
export default Router;
