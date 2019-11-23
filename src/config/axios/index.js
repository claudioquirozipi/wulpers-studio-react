import axios from 'axios';

export const baseURL = 'http://localhost:1337';
export const blogsAxios = axios.create({
    baseURL
});
