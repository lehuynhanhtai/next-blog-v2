import axios, { AxiosError, AxiosResponse } from 'axios';
// Create an instance using the config defaults provided by the library
// At this point the timeout config value is `0` as is the default for the library
const instance = axios.create({
  baseURL: process.env.NEXTAUTH_URL,
});

// Add a response interceptor
instance.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error: AxiosError) {
    // console.log(error.response?.data);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error.response;
  },
);

export default instance;
