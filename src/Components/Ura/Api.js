import axios from 'axios';

const api = axios.create({
    baseURL: 'https://emex.newave.one',
    headers: {'Content-Type': 'application/json; charset=utf-8',},
    auth: {
    username: process.env.REACT_APP_USERNAME,
    password: process.env.REACT_APP_PASSWORD,
    }}
);
export default api;