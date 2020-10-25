import axios from 'axios';

import history from 'helpers/history';

const client = axios.create({
  baseURL: 'https://reqres.in/api',
});

// Add a request interceptor
client.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('token');
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
client.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      history.push('/');
    }
    return Promise.reject(error);
  }
);

export default client;
