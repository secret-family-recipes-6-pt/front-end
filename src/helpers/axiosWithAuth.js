import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token
export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "http://localhost:5000/api", //needs to be changed
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
};