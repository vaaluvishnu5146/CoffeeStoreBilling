import Axios from "axios";

const VishnuAxios = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
    "Auth-token": localStorage.getItem("_token"),
  },
});

VishnuAxios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("INTERCEPTOR", response);
    if (response && response.status === 200) {
      response.statusText = "Users fetched successfully...";
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default VishnuAxios;
