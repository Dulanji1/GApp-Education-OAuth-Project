import axios from "axios";

axios.defaults.headers.common["Content-Type"] = "application/json";

//Fixing Bi Directional Dependancies
export function setToken(token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;

  if (!expectedError) {
  } else if (error.response.status === 404) {
  } else if (error.response.status === 501) {
  } else return Promise.reject(error);
});
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
  setToken: setToken,
};
