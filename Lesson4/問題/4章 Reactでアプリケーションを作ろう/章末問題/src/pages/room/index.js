import React from "react";
import { Link } from "react-router-dom";
import Room from "../../component/roombtn";
import { RoomType } from "../../interfaces/roomtype";

export default class Index extends React.Component{
 constructor(props) {
   super(props);
   this.state = {
     // selectARoomとselectBRoomの初期値をvacantにする。
     selectARoom: [①],
     selectBRoom: [①],
   };
 }
 handleRoomAState = (val) => {
   this.setState({ selectARoom: val });
 };
 // selectBRoomのstateを変更するhandleRoomBStateを定義する。
 // [②]

 render() {
   return (
     <div>
       <h1>TechRoom</h1> 
       <h2>RoomA</h2>
       <div>
       <Room
       handle_room={this.handleRoomAState}
       // selectARoomのstateを代入する。
       // selectRoom={[③]}
        />
       </div>
       <h2>RoomB</h2>
       <div>
       <Room
       handle_room={this.handleRoomBState}
        // selectBRoomのstateを代入する。
        // selectRoom={[④]}
        />
       </div>
       <Link to="/">
       <h3>トップページへ戻る</h3>
       </Link>
     </div>
   );
 }
}
