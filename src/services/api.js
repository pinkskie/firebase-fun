import axios from "axios";

const user = JSON.parse(localStorage.getItem("userData") || "{}");

const createInstance = () => {
  const headers = {
    Authorization: `Bearer ${user?.token}`,
  };

  return axios.create({
    baseURL: "https://api.spotify.com",
    headers,
  });
};

const api = createInstance();

export const getAlbums = () =>
  api
    .get(
      "/v1/albums?ids=0FYvMdfTfYJxnJnKs1wDb0%2C1oKYKiAwR31eJvkRwpQVrb%2C4NVpOwNbLmYYQ0w4Cxjk5g&market=US"
    )
    .then(({ data }) => data);
export const getPlaylists = () =>
  api
    .get("/v1/playlists/37i9dQZF1EIVOlGHvpBwBH?market=US")
    .then(({ data }) => data);
// export const getCategories = () => api.get("/v1/albums?ids=2ODvWsOgouMbaA5xf0RkJe&market=US").then(({ data }) => data);
