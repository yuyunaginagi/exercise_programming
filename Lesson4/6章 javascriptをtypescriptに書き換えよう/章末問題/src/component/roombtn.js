import React from "react";
import { RoomType } from "../interfaces/roomtype";

export default class Index extends React.Component { 
    render() {
    return (
    <button
    style={{
    padding: "4rem 6rem",
    backgroundColor:
        this.props.selectRoom === RoomType.in_use ? "#ff0000":"#0000ff"
    }}
    onClick={() => {
        this.props.handle_room&&this.props.handle_room(RoomType.in_use);
    }}
    ></button>
    );
  }
}
