import React from "react";
import { RoomType } from "../interfaces/roomtype";
interface Props {
    selectRoom: RoomType;
    handle_room?: (val: RoomType) => void;
}
export default class Index extends React.Component<Props> {
    render() {
    return (
    <button
    style={{
    padding: "4rem 6rem",
    fontSize:"60px",
    border:"none",
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