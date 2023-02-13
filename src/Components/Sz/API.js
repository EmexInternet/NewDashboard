import axios from 'axios';

const API = axios.create({
  baseURL: 'https://emextelecom.sz.chat/api/v4/',
  headers: { 
  'Content-Type': 'application/json', 
  'Access-Control-Allow-Origin' : '*',
  'referrer-policy': 'strict-origin-when-cross-origin'
  },
});

export default API;