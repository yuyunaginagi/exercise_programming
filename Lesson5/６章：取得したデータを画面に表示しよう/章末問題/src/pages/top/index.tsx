import React, {useEffect} from "react";
import { genreRequest } from '../../requests/genreRequest'
import { taskRequest } from '../../requests/taskRequest'
import { useDataReducer } from '../../hooks/useDataReducer'
import { GenreType } from '../../interfaces/GenreType'
import { TaskType } from '../../interfaces/TaskType'
import Task from '../task'
import Genre from '../genre'
import MenuIcon from "@material-ui/icons/Menu";
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
    fetchGenres()
    fetchTasks()
  }, []);

  return (
    <div className='main'>
      <div className='list'>
        <div className='bar'>
          <div><MenuIcon/></div>
          {/* メニューアイコンをクリックするとジャンル一覧が開閉するようにする */}
          <div className='genre-bar'>ジャンル一覧</div>
        </div>
        <div className='genres'>
        { data.genresData.map((genre: GenreType) => 
           {/*  Genreコンポーネントを使用し、ジャンル一覧を表示するようにする */}
        )}
        </div>
      </div>

      <div className='list'>
        <div className='bar'>
          <MenuIcon/>
          {/* メニューアイコンをクリックするとタスク一覧が開閉するようにする */}
          <div>タスク一覧</div>
        </div>
        <div className='tasks'>
        { data.tasksData.map((task: TaskType) => {
          {/*  Taskコンポーネントを使用し、タスク一覧を表示するようにする */}
        })}
        </div>
      </div>
    </div>
  )
};
