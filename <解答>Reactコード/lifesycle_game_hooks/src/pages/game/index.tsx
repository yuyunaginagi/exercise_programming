import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Index() {
const [winCount, setWinCount] = useState<number>(0);
const [selectCount, setSelectCount] = useState<number>(0);
// randomCountのstateを変数として定義する。

// [①]
const [battleCount, setBattleCount] = useState<number>(0);
const [resultString, setResultString] = useState<string>(
  "番号を選んでね！"
);
// battleCountとwinCountが、更新されたstateの値が反映できるように
// useRefを使って実装をする。

// [②]
// const battleCountVal = React.useRef(0);
// const winCountVal = React.useRef(0);

// 番号当てゲーム開始のリンクを踏んだら、
// 「番号当てゲームです。ページが遷移したら、好きな番号を選んでください。」と表示させる。
// トップページへ戻るのリンクを踏むと、戦績が出るようにする。

// [③](() => {
//   alert("番号当てゲームです。\n ページが遷移したら、好きな番号を選んでください。");
//   return () => {
//     alert( `【戦績】\n${[④]}戦中、${winCountVal.current}勝でした。`);
//   };
// }, []);

 const handleOnClick = (val: number): void => {
  setBattleCount(battleCount + 1);
  setSelectCount(val);
};

// 番号をクリックすると相手の番号がランダムで選択されるような仕様にする。

// [⑤](() => {
//   if (selectCount !== undefined) {
//     const randomCount: number = Math.floor(Math.random() * 3);
//     setRandomCount(randomCount);
//     confirmResult(selectCount,randomCount);

//     battleCountVal.current = battleCount;
//     winCountVal.current = winCount;
//   }
// }, [⑥]);

const confirmResult = (selectCount: number, randomCount: number): void => {
 if (selectCount === randomCount) {
    setResultString("あたり！");
    setWinCount(winCount + 1);
 } else {
    setResultString("はずれ！");
  }
}

  return (
    <div>
      <h1>TechPlay</h1>
      <h2>番号当てゲーム</h2>
      <p>{resultString}</p>
      <button
       onClick={() => {
         handleOnClick(0)
      }}
      >
      0</button>
      <button
       onClick={() => {
         handleOnClick(1)
      }}
      >
      1</button>
      <p>相手の番号</p>
      <button
      style={{
       backgroundColor: randomCount == 0 ? "#ffb6c1" : "#ffffff",
      }}
      >
      0</button>
      <button
      style={{
       backgroundColor: randomCount == 1 ? "#ffb6c1" : "#ffffff",
      }}
      >
      1</button>
      <Link to="/">
      <h3>トップページへ戻る</h3>
      </Link>
    </div>
  );
}
