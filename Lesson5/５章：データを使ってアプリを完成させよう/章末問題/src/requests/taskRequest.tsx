import axiosBase from "axios";

type action = "fetchTasks";

const api = axiosBase.create({
  // タスクデータのベースパスとレスポンス形式を設定してください。
});

export const taskRequest: (action: action) => any = async (action: action) => {
  switch (action) {
    case "fetchTasks":
      return null; // タスクデータを返すように編集してください。
    default:
      return null;
  }
};