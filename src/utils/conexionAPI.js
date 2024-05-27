const API = "https://api.themoviedb.org/3";

export const get = (path) => {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzlkYTJiOWVmMTlkZjViZTEyYzZlMjM1ZGNjNTVkZCIsInN1YiI6IjY2MWM0MzNlOTMxZWExMDE4NjY0ODU4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vJevOHaZWj4ilqOreN3ewd3s55CnFdgHxd7CmYMTpgY",
      "Content-type": "application/json;charset=utf-8",
    },
  }).then((results) => results.json());
};