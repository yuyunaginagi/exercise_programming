import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Top from "./pages/top";
import Confirmation from "./pages/confirmation";
import Application from "./pages/application";

export default class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Top} />
        <Route path="/confirm" component={Confirmation} />
        <Route path="/application" component={Application} />
      </BrowserRouter>
    );
  }
}