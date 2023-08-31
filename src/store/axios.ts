import axios from "axios";

const post = (url: string, params: any) =>
  axios
    .post(url, params, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
      },
    })
    .catch((response) => {
      return Promise.reject(response);
    });

const get = (url: string) =>
  axios
    .get(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*"
      },
    })
    .catch((response) => {
      return Promise.reject(response);
    });

const put = (url: string, params: any) =>
  axios
    .put(url, params, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
      },
    })
    .catch((response) => {
      return Promise.reject(response);
    });

const patch = (url: string, params: any) =>
  axios
    .patch(url, params, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
      },
    })
    .catch((response) => {
      return Promise.reject(response);
    });

const Delete = (url: string) =>
  axios
    .delete(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
      },
    })
    .catch((response) => {
      return Promise.reject(response);
    });

export { post, get, put, Delete, patch };
