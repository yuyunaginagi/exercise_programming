import React from "react";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  render() {
    return ( 
      <div
      style={{
        padding: "1rem",
      }}
      >
        <h1
        style={{
          padding: "1rem",
          backgroundColor: "#1e90ff",
        }}
        >TechPlay</h1>     
        <Link to="/game">
          <h3>番号当てゲーム開始</h3>
        </Link>
      </div>
    );
  }
}
