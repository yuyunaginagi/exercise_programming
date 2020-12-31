import React from "react";

export default class Index extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      state_number: 1
    };
 }

  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
          Stateの値 = {this.state.state_number}
      </div>
    );
  }
}