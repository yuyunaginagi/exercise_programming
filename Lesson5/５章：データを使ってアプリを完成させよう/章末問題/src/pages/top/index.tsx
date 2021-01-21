import React from "react";
import { genreRequest } from '../../requests/genreRequest'
import { taskRequest } from '../../requests/taskRequest'
import './index.css';

export default function Index () {

  const fetchGenres = async () => {
    // genreRequestを用いて、取得したジャンルデータをコンソールにログを出力するように編集してください。
  };

  const fetchTasks = async () => {
    // taskRequestを用いて、取得したタスクデータをコンソールにログを出力するように編集してください。
  };

  return (
    <div className='main'>
      <button className = 'task-button' onClick = {() => fetchTasks()}>タスクデータをログに表示</button>
      <button className = 'genre-button' onClick = {() => fetchGenres()}>ジャンルデータをログに表示</button>
    </div>
  )
};
