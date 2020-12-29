import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>確認画面です</h1>
      <Link to="/">
          トップページへ
      </Link>
    </div>
  );
}
