
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
        return 【 ① 】
      case 'シュート練習':
        return 【 ② 】
      case 'ドリブル練習':
        return 【 ③ 】
      case '練習試合':
        return 【 ④ 】
    }
  }

  const [condition, dispatch] = useReducer(reducer, initialData);

  return (
    <div>
      <div className='main'>
        <button onClick={【 ⑤ 】} className='button'>休養を取る</button>
        <button onClick={【 ⑥ 】} className='button'>シュート練習をする</button>
        <button onClick={【 ⑦ 】} className='button'>ドリブル練習をする</button>
        <button onClick={【 ⑧ 】} className='button'>練習試合をする</button>
      </div>
      <div className='current-condition'>
        怪我のしやすさ:{condition.risk} シュート力:{condition.power} ドリブルのうまさ:{condition.technique}
      </div>
    </div>
  )
};
