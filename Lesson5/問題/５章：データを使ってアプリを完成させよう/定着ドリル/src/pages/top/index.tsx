import React, {useEffect} from "react";
import { genreRequest } from '../../requests/genreRequest'
import { taskRequest } from '../../requests/taskRequest'
import { useDataReducer } from '../../hooks/useDataReducer'
import './index.css';

export default function Index () {
  const [data, dispatch] = useDataReducer();

  const fetchGenres = async () => {
    const genres = await genreRequest("fetchGenres");
    // 「useDataReducer」で管理している「genresData」を、取得した「genres」に更新する
  };

  const fetchTasks = async () => {
    const tasks = await taskRequest("fetchTasks");
    // 「useDataReducer」で管理している「tasksData」を、取得した「tasks」に更新する
  };

  // reducerで管理しているジャンルが変化したらジャンルを表示
  useEffect(() => {
    console.log(data.genresData);
  }, [data.genresData]);

  // reducerで管理しているタスクが変化したらタスクを表示
  useEffect(() => {
    console.log(data.tasksData);
  }, [data.tasksData]);

  return (
    <div className='main'>
      <button className = 'task-button' onClick = {() => fetchTasks()}>タスクデータをログに表示</button>
      <button className = 'genre-button' onClick = {() => fetchGenres()}>ジャンルデータをログに表示</button>
    </div>
  )
};
