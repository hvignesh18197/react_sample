import axios from "axios";

export default () => {
  axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  return axios.create({
    baseURL: "https://app.staging.nocompre.co.uk/api",
  });
};
