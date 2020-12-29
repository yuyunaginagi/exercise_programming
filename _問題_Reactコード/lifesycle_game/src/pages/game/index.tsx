import React from "react";
import { Link } from "react-router-dom";

interface Props {}
interface State {
 selectCount: number;
 randomCount: number;
 battleCount: number;
 winCount:number;
 resultString: string;
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

componentDidMount() {
 alert("番号当てゲームです。\n ページが遷移したら、好きな番号を選んでください。");
}

handleOnClick = (val: number): void => {
 this.setState({ battleCount: this.state.battleCount + 1 });
 this.setState({ selectCount: val });
};

componentWillUnmount() {
 alert(
   `【戦績】\n${this.state.battleCount}戦中、${this.state.winCount}勝でした。`
 );
}

componentDidUpdate(prevProps: Props, prevState: State) {
if (prevState.battleCount !== this.state.battleCount) {
  const randomCount: number = Math.floor(Math.random() * 2);
  this.setState({ randomCount: randomCount });
  this.confirmResult(this.state.selectCount,randomCount);
}
}

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
   <div>
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