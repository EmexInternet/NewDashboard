import axios from 'axios';

const API = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://emextelecom.sz.chat/api/v4/',
  headers: { 
  'Content-Type': 'application/json',
  'referrer-policy': 'strict-origin-when-cross-origin'
  },
});

export default API;