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
        const id: number = Number(action.payload.genre_id);
        if (id === 0) {
          return action.payload.tasks;
        } else {
          return action.payload.tasks.filter((task: TaskType) => {
            return id === task.genre_id;
          });
        }
    }
  };

  const [filteredTasks, tasksDispatch] = useReducer(reducer, initialData);
  return [filteredTasks, tasksDispatch];
};
