import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // Change to your backend URL
    timeout: 2000,
});

export default api;
