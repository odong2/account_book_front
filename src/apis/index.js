// local vue api axios instance
import axios from 'axios';

// host URL
const HOST_URL = process.env.VUE_APP_HOST_URL;
const API_URL = process.env.VUE_APP_API_URL;

// axios 객체 설정
const axiosInstance =  axios.create({
  // 서버 주소 환경변수 값 사용
  baseURL: process.env.VUE_APP_API_URL,
});

// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  config => {
    config.headers.Authorization = 'Bearer token'; // 예시: 인증 헤더 설정
    config.headers["Access-Control-Allow-Origin"] = "*";

    return config;
  },
  error => {
    console.error('Request error:', error);
    return Promise.reject(error); // Promise.reject를 통해 오류를 호출자에게 전달합니다.
  }
);

export {axiosInstance, HOST_URL, API_URL};


