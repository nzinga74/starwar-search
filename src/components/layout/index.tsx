import React from "react";
import Header from "../Header";
import Searcher from "../Searcher";
import { LayoutSection } from "./styled";
const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <LayoutSection>
        <Searcher />
      </LayoutSection>
    </>
  );
};
export default Layout;
