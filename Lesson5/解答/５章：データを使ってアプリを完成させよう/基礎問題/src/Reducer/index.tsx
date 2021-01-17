import React, { useReducer } from "react";
import './index.css';

export type Data = {
  risk: number,
  power: number,
  technique: number,
}

export type dataAction = {
  type: '休養' | 'シュート練習' | 'ドリブル練習' | '練習試合'
}

export default function Index () {
  const initialData = {
    risk: 50,
    power: 50,
    technique: 50,
  };

  const reducer = (state: Data, action: dataAction) => {
    switch (action.type) {
      case '休養':
        return {risk: state.risk - 10, power: state.power - 5, technique: state.technique - 5 };
      case 'シュート練習':
        return {risk: state.risk + 5 , power: state.power + 10, technique: state.technique };
      case 'ドリブル練習':
        return {risk: state.risk + 5 , power: state.power    , technique: state.technique + 10 };
      case '練習試合':
        return {risk: state.risk + 10, power: state.power + 5, technique: state.technique + 5 };
    }
  }

  const [condition, dispatch] = useReducer(reducer, initialData);

  return (
    <div>
      <div className='main'>
        <button onClick={()=>dispatch({type: "休養"})} className='button'>休養を取る</button>
        <button onClick={()=>dispatch({type: "シュート練習"})} className='button'>シュート練習をする</button>
        <button onClick={()=>dispatch({type: "ドリブル練習"})} className='button'>ドリブル練習をする</button>
        <button onClick={()=>dispatch({type: "練習試合"})} className='button'>練習試合をする</button>
      </div>
      <div className='current-condition'>
        怪我のしやすさ:{condition.risk} シュート力:{condition.power} ドリブルのうまさ:{condition.technique}
      </div>
    </div>
  )
};