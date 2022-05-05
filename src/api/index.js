
import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 1000,
});

export const idMapper = (item) => {
    return { ...item, id: item._id };
}

export const diaryMapper = (item) => {
    return idMapper(item);
}