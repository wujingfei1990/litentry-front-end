/**
 * http请求的统一出口，方便统一处理，暂时透传。
 */
import axios from 'axios';
import { getLocalStorage } from './utils/tools';

//axios.defaults.headers.common['Authorization'] = getLocalStorage('token') ? `Bearer ${getLocalStorage('token')}` : '';
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.common.timeout = 30000;
axios.interceptors.request.use(
  (config) => {
    if (getLocalStorage('token')) {
      config.headers.Authorization = `Bearer ${getLocalStorage('token')}`;
    }
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.log('request error', error);
    return Promise.reject(error);
  },
);

// 处理统一处理
axios.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (String(data.code) === '0') {
      return response.data.data;
    } else if (String(data.code) === '401') {
      // 当code值为某个值的时候, 未登录状态, 跳转到登录页
      window.location.href = '/login';
    }

    return Promise.resolve(response.data);
  },
  (error) => Promise.reject(error),
);

export default axios;
