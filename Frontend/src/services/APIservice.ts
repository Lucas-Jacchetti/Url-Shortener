import axios from 'axios';

const api = axios.create({
    baseURL: 'https://url-shortener-production-b6e6.up.railway.app', // Change to your backend URL
    timeout: 2000,
});

export default api;
