import axios from 'axios';

const API = axios.create({
  baseURL: 'https://emextelecom.sz.chat/api/v4/',
  headers: { 'Content-Type': 'application/json' },
});

export default API;