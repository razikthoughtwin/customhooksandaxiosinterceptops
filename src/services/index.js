import axios from "axios";

const axiosinstance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

axiosinstance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  axiosinstance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default axiosinstance