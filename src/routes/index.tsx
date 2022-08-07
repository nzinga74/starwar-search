import { BrowserRouter, useRoutes } from "react-router-dom";
import React from "react";

import Layout from "../components/layout";
import Home from "../pages/Home";
import CharacterDetails from "../pages/CharacterDetails";
import Film from "../pages/Film";
import Vehicles from "../pages/Vehicles";
import StarShip from "../pages/StarShips";
import Animation from "../pages/Animate";

function MainRoutes() {
  let route = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "person", element: <CharacterDetails /> },
        { path: "films", element: <Film /> },
        { path: "vehicles", element: <Vehicles /> },
        { path: "starships", element: <StarShip /> },
      ],
    },
    {
      path: "animation",
      element: <Animation />,
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
