import React, {useEffect, useState} from "react";
import { genreRequest } from '../../requests/genreRequest'
import { taskRequest } from '../../requests/taskRequest'
import { useDataReducer } from '../../hooks/useDataReducer'
import { GenreType } from '../../interfaces/GenreType'
import { TaskType } from '../../interfaces/TaskType'
import { useFilterTasks } from "../../hooks/useFilterTasks";
import Task from '../task'
import Genre from '../genre'
import MenuIcon from "@material-ui/icons/Menu";
import './index.css';

export default function Index () {
  const [data, dispatch] = useDataReducer();
  const [isGenreListOpen, setIsGenreListOpen] = useState(true);
  const [isTaskListOpen, setIsTaskListOpen] = useState(true);
  const [selectedGenreId, setSelectedGenreId] = useState(0);

  const fetchGenres = async () => {
    const genres = await genreRequest("fetchGenres");
    dispatch({ type: "genresUpdate", payload: { genre: genres } });
  };

  const fetchTasks = async () => {
    const tasks = await taskRequest("fetchTasks");
    dispatch({ type: "tasksUpdate", payload: { task: tasks } });
  };

  const handleOnClickGnereMenu = () => {
    setIsGenreListOpen(!isGenreListOpen)
  };

  const handleOnClickTaskMenu = () => {
    setIsTaskListOpen(!isTaskListOpen)
  };

  const handleOnClickSelectedGenreId = (genre_id: number) => {
    setSelectedGenreId(genre_id)
  };

  useEffect(() => {
    fetchGenres()
    fetchTasks()
  }, []);

  useEffect(() => {
    // ジャンルが変更されるたびにそのジャンルに紐づいたタスクに状態を更新
  }, [selectedGenreId]);

  return (
    <div className='main'>
      <div className='list'>
        <div className='bar'>
          <MenuIcon onClick={ handleOnClickGnereMenu}/>
          <div className='genre-bar'>ジャンル一覧</div>
        </div>
        <div className='genres'>
        { isGenreListOpen && data.genresData.map((genre: GenreType) => 
          {
            return (
              <Genre genre={genre} handleOnClickSelectedGenreId={handleOnClickSelectedGenreId}/>
            )
          }
        )}
        </div>
      </div>
    <div className='list'>
        <div className='bar'>
          <MenuIcon onClick={ handleOnClickTaskMenu}/>
          <div>タスク一覧</div>
        </div>
        <div className='tasks'>
          {/* 選択したジャンルに紐づいたタスクを表示させる */}
          {/* 各タスクの表示にはTaskコンポーネントを使用する */}
        </div>
      </div>
    </div>
  )
};
