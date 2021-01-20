import React, {useEffect} from "react";
import { genreRequest } from '../../requests/genreRequest'
import { taskRequest } from '../../requests/taskRequest'
import { useDataReducer } from '../../hooks/useDataReducer'
import './index.css';

export default function Index () {
  const [data, dispatch] = useDataReducer();

  const fetchGenres = async () => {
    const genres = await genreRequest("fetchGenres");
    dispatch({ type: "genresUpdate", payload: { genre: genres } });
  };

  const fetchTasks = async () => {
    const tasks = await taskRequest("fetchTasks");
    dispatch({ type: "tasksUpdate", payload: { task: tasks } });
  };

  useEffect(() => {
    console.log(data.genresData);
  }, [data.genresData]);

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
