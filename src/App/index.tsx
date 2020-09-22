import "@shinetools/sunbeams/web/fonts/Rubik/Rubik.css";
import "@shinetools/sunbeams/web/fonts/Icons.css";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "@shinetools/sunbeams/web";
import Sidebar from "../components/Sidebar";
import Bank from "../features/Bank";
import {
  GlobalStyle,
  AppContainer,
  ModalsContainer,
  AlertsContainer,
} from "./styles";

const Main: React.FunctionComponent = () => (
  <ThemeProvider>
    <>
      <GlobalStyle />
      <AppContainer>
        <Router>
          <Sidebar />
          <Switch>
            <Route component={Bank} path="/bank" />
            <Redirect to="/bank" />
          </Switch>
        </Router>
      </AppContainer>
      <ModalsContainer id="modal" />
      <AlertsContainer id="alert" />
    </>
  </ThemeProvider>
);

export default Main;
