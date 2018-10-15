import axios from 'axios';

function interceptors() {
  // http请求拦截器
  axios.interceptors.request.use((req) => {
    // Intcp.ReqHeader.setHeader(req);
    console.log('request');
    return req;
  }, error => Promise.reject(error));
  // http响应拦截器
  axios.interceptors.response.use((res) => {
    // Intcp.ResCode.doCode(res);
    console.log('response');
    // 可以操作登陆失效登操作
    return res;
  }, (error) => {
    // Intcp.ResError.doError(error);
    console.log(error);
    return Promise.reject(error);
  });
}

export default {
  interceptors
};
