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
        <h1>TechProduct</h1>     
        <Link to="/buy">
          <h3>購入ページへ</h3>
        </Link>
      </div>
    );
  }
}
