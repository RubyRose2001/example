import axios from 'axios';
import Intcp from './http.intcp';

Intcp.interceptors();

const baseURL = 'https://www.baidu.com';

const instance = axios.create({
  baseURL,
  proxy: {
    host: 'http://www.baidu.com'
  }
});

export default {
  post: (url, params) => instance.post(url, params),
  get: (url, params) => instance.get(url, {
    params
  }),
};
