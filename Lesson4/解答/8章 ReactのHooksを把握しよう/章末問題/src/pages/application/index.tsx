import React , {useState} from "react";
import { Link } from "react-router-dom";
import { CountCustomerNumber } from "../../hooks/countCustomerNumber";

export default function Index() {
  const [reserveNumber, handleIncreaseReserveNumber, handleDecreaseReserveNumber] = CountCustomerNumber()

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>応募画面です</h1>
      <h2>予約人数:{reserveNumber}人</h2>
      <div style={{
        display: "flex",
      }}>
        <button style={{
          width:100,
          height:100
        }}
        
        onClick={
          handleIncreaseReserveNumber
        }
        >
          予約人数を追加する 
        </button>

        <button style={{
          width:100,
          height:100
        }}
        
        onClick={
          handleDecreaseReserveNumber
        }
        >
          予約人数を減らす
        </button>
      </div>
      <Link to="/confirm">
          確認画面へ
      </Link>
    </div>
  );
}
