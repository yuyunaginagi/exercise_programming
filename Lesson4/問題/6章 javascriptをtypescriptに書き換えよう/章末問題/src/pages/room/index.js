import React from "react";
import { Link } from "react-router-dom";
import Room from "../../component/roombtn";
import { RoomType } from "../../interfaces/roomtype";

 export default class Index extends React.Component{ 
  constructor(props) {
    super(props);
    this.state = {
      selectARoom:  RoomType.vacant,
      selectBRoom:  RoomType.vacant,
    };
  }
 
  handleRoomAState = (val) => {
    this.setState({ selectARoom: val });
  };
  handleRoomBState = (val) => {
    this.setState({ selectBRoom: val });
  };
  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <h1>TechRoom</h1>  
        <h2>RoomA</h2>
        <div>
        <Room 
        handle_room={this.handleRoomAState}
        selectRoom={this.state.selectARoom}
         />
        </div>
        <h2>RoomB</h2>
        <div>
        <Room 
        handle_room={this.handleRoomBState}
        selectRoom={this.state.selectBRoom}
         />
        </div>
        <Link to="/">
        <h3>トップページへ戻る</h3>
        </Link>
      </div>
    );
  }
}