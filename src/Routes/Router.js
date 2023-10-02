import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Index from "../pages/Index";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Index} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Router;
