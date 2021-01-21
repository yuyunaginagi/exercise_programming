import React from "react";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  render() {
    return ( 
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <h1>TechRoom</h1>     
        <Link to="/room">
          <h3>部屋の空き状況確認ページへ</h3>
        </Link>
      </div>
    );
  }
}
