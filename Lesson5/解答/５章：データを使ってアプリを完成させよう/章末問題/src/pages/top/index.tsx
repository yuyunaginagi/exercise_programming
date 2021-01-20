import React from "react";
import { genreRequest } from '../../requests/genreRequest'
import { taskRequest } from '../../requests/taskRequest'
import './index.css';

export default function Index () {
  const fetchGenres = async () => {
    const genres = await genreRequest("fetchGenres");
    console.log(genres)
  };

  const fetchTasks = async () => {
    const tasks = await taskRequest("fetchTasks");
    console.log(tasks)
  };

  return (
    <div className='main'>
      <button className = 'task-button' onClick = {() => fetchTasks()}>タスクデータをログに表示</button>
      <button className = 'genre-button' onClick = {() => fetchGenres()}>ジャンルデータをログに表示</button>
    </div>
  )
};
