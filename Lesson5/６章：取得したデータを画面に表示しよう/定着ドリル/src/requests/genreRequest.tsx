import axiosBase from "axios";

type action = "fetchGenres";

const api = axiosBase.create({
  baseURL: "http://localhost:3000/genres",
  responseType: "json",
});

export const genreRequest: (action: action) => any = async (action: action) => {
  switch (action) {
    case "fetchGenres":
      const fetchGenres = await api.get("/");
      return fetchGenres.data;
    default:
      return null;
  }
};
