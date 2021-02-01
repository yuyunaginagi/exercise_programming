import React from "react";
import { RoomType } from "../../interfaces/roomtype"

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // スイッチの状態をstateで管理する 
    };
  }
  render() {

    const button_size = 100
    return (
      <div style={{
        marginTop: "10px",
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
      }}>
        スイッチの状況
        <div style={{
        display: "flex",
        }}>
        {/* 1つ目のスイッチ */}
        <button style={{
            height: button_size,
            width: button_size,
            background: "#BBB9D5"
            // 色を各ボタンの状況に応じて変更する
          }}onClick={() => {
            // スイッチのON, OFFを切り替える
          }}>
          OFF {/* 1つ目のスイッチの状態 */}
        </button>

        {/* 2つ目のスイッチ */}
        <button style={{
          height: button_size,
          width: button_size,
          background: "#BBB9D5"
          // 色を各ボタンの状況に応じて変更する
        }} onClick={() => {
          // スイッチのON, OFFを切り替える
        }}>
          OFF {/* 2つ目のスイッチの状態 */}
        </button>
        </div>
      </div>
    );
  }
}