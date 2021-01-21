import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Application from "./pages/application";

export default class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Application} />
      </BrowserRouter>
    );
  }
}