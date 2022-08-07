import { GlobalStyle } from "./styles";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import Router from "./routes";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
        <GlobalStyle />
      </Provider>
    </>
  );
}

export default App;
