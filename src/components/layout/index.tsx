import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { LayoutSection } from "./styled";
const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <LayoutSection>
        <Outlet />
      </LayoutSection>
    </>
  );
};
export default Layout;
