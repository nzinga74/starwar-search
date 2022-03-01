import { GlobalStyle } from "./styles";
import Home from "./pages/Home";
import "./index.css";

import Router from "./routes";
function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
}

export default App;
