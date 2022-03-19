import axios from "axios";

const backendHost = "http://localhost:5000/api/";

export function login(data) {
  return new Promise((res, rej) => {
    axios
      .post(backendHost + "users/login", data)
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
      .post(backendHost + "register", data)
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

export function initOrgan(token) {
  axios
    .post(backendHost + "users/initorgan", true, {
      headers: { "x-auth-token": token },
    })
    .then((res) => {
      console.log("done", res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function submitOrgan(data, token) {
  return new Promise((res, rej) => {
    axios
      .post(backendHost + "organiser", data, {
        headers: { "x-auth-token": token },
      })
      .then((result) => {
        res(result);
      })
      .catch((err) => {
        rej(err);
      });
  });
}
