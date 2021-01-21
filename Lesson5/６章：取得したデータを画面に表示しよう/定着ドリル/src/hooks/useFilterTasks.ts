import { useReducer } from "react";
import { TaskType } from "../interfaces/TaskType";

export type filterAction = {
  type: "filterTask";
  payload: {
    tasks: TaskType[];
    genre_id: number;
  };
};

export const useFilterTasks = (): any => {
  const initialData: TaskType[] = [
    
  ];

  const reducer = (tasks: TaskType[], action: filterAction) => {
    switch (action.type) {
      case "filterTask":
        const id: number = Number(action.payload.genre_id); // 選択されたジャンルid
        return {...tasks} // 選択されたジャンルidに紐付けされたタスクのみをフィルタリング
    }
  };

  const [filteredTasks, tasksDispatch] = useReducer(reducer, initialData);
  return [filteredTasks, tasksDispatch];
};
