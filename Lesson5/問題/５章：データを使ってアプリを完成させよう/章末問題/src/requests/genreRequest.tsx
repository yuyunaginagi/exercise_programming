import axiosBase from "axios";

type action = "fetchGenres";

const api = axiosBase.create({
  // ジャンルデータのベースパスとレスポンス形式を設定してください。
});

export const genreRequest: (action: action) => any = async (action: action) => {
  switch (action) {
    case "fetchGenres":
      return null; // ジャンルデータを返すように編集してください。
    default:
      return null;
  }
};
