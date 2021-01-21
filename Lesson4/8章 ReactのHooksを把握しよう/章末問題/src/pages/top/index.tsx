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
    <h1>トップページ</h1>
    
      <Link to="/application">
          応募画面へ
      </Link>
    </div>
  );
}
