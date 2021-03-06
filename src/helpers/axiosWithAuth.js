import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token
export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://secret-family-recipes6.herokuapp.com/api",
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
};
