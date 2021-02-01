import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Room from "./components/room";

export default class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Room} />
      </BrowserRouter>
    );
  }
}