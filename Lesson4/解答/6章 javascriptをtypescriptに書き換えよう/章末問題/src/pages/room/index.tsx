import React from "react";
import { Link } from "react-router-dom";
import Room from "../../component/roombtn";
import { RoomType } from "../../interfaces/roomtype";
interface Props {}
interface State {
  selectARoom: RoomType ;
  selectBRoom: RoomType ;
 }
 export default class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectARoom:  RoomType.vacant,
      selectBRoom:  RoomType.vacant,
    };
  }
 

  handleRoomAState = (val: RoomType):void => {
    this.setState({ selectARoom: val });
  };
  handleRoomBState = (val: RoomType):void => {
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