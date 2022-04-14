import { StrictMode } from "react";
import ReactDom from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./Login";

ReactDom.render(
  <StrictMode>
    <BrowserRouter>
      <>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
      </>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
