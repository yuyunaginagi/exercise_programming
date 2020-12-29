import React from "react";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  render() {
    return ( 
      <div>
        <h1>TechPlay</h1>     
        <Link to="/game">
          <h3>番号当てゲーム開始</h3>
        </Link>
      </div>
    );
  }
}
