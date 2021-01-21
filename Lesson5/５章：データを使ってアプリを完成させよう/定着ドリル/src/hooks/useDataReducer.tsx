import {useReducer} from "react";
import { GenreType } from '../interfaces/GenreType'
import { TaskType } from '../interfaces/TaskType'

export type dataAction = {
  type: "tasksUpdate" | "genresUpdate";
  payload: { task?: TaskType[], genre?: GenreType[] }
};

export type Data = {
  tasksData: TaskType[];
  genresData: GenreType[];
};

export const useDataReducer = (): any => {
  const initialData = {
    tasksData: [],
    genresData: [],
  };

  const reducer = (state: Data, action: dataAction) => {
    switch (action.type) {
      case "tasksUpdate":
        return { ...state } //reducerで管理している「tasksData」を「payload」で渡された値に更新
      case "genresUpdate":
        return { ...state } //reducerで管理している「genresData」を「payload」で渡された値に更新
    }
  };

  const [data, dispatch] = useReducer(reducer, initialData);
  return [data, dispatch];
};