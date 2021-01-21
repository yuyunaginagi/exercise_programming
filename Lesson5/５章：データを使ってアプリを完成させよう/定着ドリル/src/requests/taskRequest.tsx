import axiosBase from "axios";

type action = "fetchTasks";

const api = axiosBase.create({
  baseURL: "http://localhost:3000/tasks",
  responseType: "json",
});

export const taskRequest: (action: action) => any = async (action: action) => {
  switch (action) {
    case "fetchTasks":
      const fetchTasks = await api.get("/");
      return fetchTasks.data;
    default:
      return null;
  }
};
