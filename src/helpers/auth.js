import axios from "axios";

const backendHost = "http://localhost:5000/api/";

export function login(data) {
  return new Promise((res, rej) => {
    axios
      .post(backendHost + "auth", data)
      .then((result) => {
        res({ ...result.data, token: result.headers["x-auth-token"] });
      })
      .catch((err) => {
        rej(err);
      });
  });
}

export function registerUser(data) {
  return new Promise((res, rej) => {
    axios
      .post(backendHost + "users", data)
      .then((result) => {
        res({ ...result.data, token: result.headers["x-auth-token"] });
      })
      .catch((err) => {
        rej(err);
      });
  });
}

export function getUserFromLocal() {
  const userStr = localStorage.getItem("orbauth");
  if (!userStr) {
    return null;
  }
  return JSON.parse(userStr);
}
