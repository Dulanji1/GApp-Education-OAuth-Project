import http from "./HttpService";
import { apiUrl } from "./../config/Config.json";

const getAuthCode = async (code) => {
  try {
    const response = await http.get(apiUrl + `auth?code=${code}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// to get token
const getToken = () => {
  return localStorage.getItem("token");
};

// fixing bi directional dependancies
http.setToken(getToken());

export default {
  getAuthCode,
};
