import React from "react";

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
        justifyContent: 'center',
        alignItems: "center",
      }}>
        {/* 1つ目のスイッチ */}
        <button style={{
            height: button_size,
            width: button_size,
          }}onClick={() => {
            // スイッチのON, OFFを切り替える
          }}>
          OFF {/* 1つ目のスイッチの状態 */}
        </button>

        {/* 2つ目のスイッチ */}
        <button style={{
          height: button_size,
          width: button_size,
        }} onClick={() => {
          // スイッチのON, OFFを切り替える
        }}>
          OFF {/* 2つ目のスイッチの状態 */}
        </button>
      </div>
    );
  }
}