import axios from 'axios';

const fortics = axios.create({
    baseURL: 'https://emextelecom.sz.chat/api/v4/auth/login',
    headers: {'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Credentials':'*' },
    data:{
      "email": "aline@emexinternet.com.br",
      "password": "3m3x@internet",
      "device_token": "d7cf18053980d7430f9f9019ea84cb4e"
  }
});

export default fortics;

