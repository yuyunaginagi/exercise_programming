import React from "react";
import { Link } from "react-router-dom";

interface Props {}
interface State {
// stateの型定義をする。
// [①]
}
export default class Index extends React.Component<Props, State> {
constructor(props: Props) {
 super(props);
 this.state = {
    selectCount: 0,
    randomCount: 0,
    battleCount: 0,
    winCount: 0,
    resultString:  "番号を選んでね！",
 };
}

// 番号当てゲーム開始のリンクを踏んだら、「番号当てゲームです。ページが遷移したら、好きな番号を選んでください。」と表示させる。
//  [②]{
//    alert("番号当てゲームです。\n ページが遷移したら、好きな番号を選んでください。");
//  }

handleOnClick = (val: number): void => {
 this.setState({ battleCount: this.state.battleCount + 1 });
 this.setState({ selectCount: val });
};

// トップページへ戻るのリンクを踏むと、戦績が出るようにする。
//   [③] {
//    alert(
//      `【戦績】\n${[④]}戦中、${[⑤]}勝でした。`
//    );
//  }

// 番号をクリックすると相手の番号がランダムで選択されるような仕様にする。
// [⑥](prevProps: Props, prevState: State) {
//  if (prevState.battleCount !== this.state.battleCount) {
//    const randomCount: number = Math.floor(Math.random() * 2);
//    this.setState({ randomCount: randomCount });
//    this.confirmResult(this.state.selectCount,randomCount);
//  }
// }

// 番号が一致した場合は「あたり！」が、
// 一致しなかった場合は「はずれ！」と表示される。
confirmResult(selectCount: number, randomCount: number): void {
if (selectCount === randomCount) {
  return this.setState({
    resultString: "あたり！",
    winCount: this.state.winCount + 1,
  });
} else {
  return this.setState({
    resultString: "はずれ！",
  });
}
}

render() {
 return (
   <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
   }}>
     <h1>TechPlay</h1>
     <h2>番号当てゲーム</h2>
     <p>{this.state.resultString}</p>
     <button
      onClick={() => {
        this.handleOnClick(0)
     }}
     >
     0</button>
     <button
      onClick={() => {
        this.handleOnClick(1)
     }}
     >
     1</button>
     <p>相手の番号</p>
     <button
     style={{
      backgroundColor: this.state.randomCount == 0 ? "#ffb6c1" : "#ffffff",
     }}
    >
     0</button>
     <button
     style={{
      backgroundColor: this.state.randomCount == 1 ? "#ffb6c1" : "#ffffff",
     }}
     >
     1</button>
     <Link to="/">
     <h3>トップページへ戻る</h3>
     </Link>
   </div>
 );
}
}