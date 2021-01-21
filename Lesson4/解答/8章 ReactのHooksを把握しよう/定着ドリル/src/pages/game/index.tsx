import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Index() {
const [winCount, setWinCount] = useState<number>(0);
const [selectCount, setSelectCount] = useState<number>(0);
const [randomCount, setRandomCount] = useState<number>(0);
const [battleCount, setBattleCount] = useState<number>(0);
const [resultString, setResultString] = useState<string>(
 "番号を選んでね！"
);

const battleCountVal = React.useRef(0);
const winCountVal = React.useRef(0);

useEffect(() => {
 alert("番号当てゲームです。\n ページが遷移したら、好きな番号を選んでください。");
 return () => {
   alert( `【戦績】\n${battleCountVal.current}戦中、${winCountVal.current}勝でした。`);
 };
}, []);

const handleOnClick = (val: number): void => {
 setBattleCount(battleCount + 1);
 setSelectCount(val);
};


useEffect(() => {
 if (selectCount !== undefined) {
   const randomCount: number = Math.floor(Math.random() * 2);
   setRandomCount(randomCount);
   confirmResult(selectCount,randomCount);

   battleCountVal.current = battleCount;
   winCountVal.current = winCount;
 }
}, [battleCount]);

const confirmResult = (selectCount: number, randomCount: number): void => {
if (selectCount === randomCount) {
   setResultString("あたり！");
   setWinCount(winCount + 1);
} else {
   setResultString("はずれ！");
 }
}

 return (
   <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}>
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