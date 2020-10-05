import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Sidebar from "../components/Sidebar";
import Bank from "../features/Bank";
import {
  GlobalStyle,
  AppContainer,
  ModalsContainer,
  AlertsContainer,
} from "./styles";
import theme from "../common/theme";

const Main: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
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
