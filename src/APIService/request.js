import http from 'axios';
import { API_ROOT } from '../constants';

console.log({API_ROOT})
const getHeader = () => {
    return {}
}

const respose = res => res.data;

const request = {
    get: url => http.get(`${API_ROOT}${url}`, getHeader()).then(respose),
    post: (url, data) => http.post(`${API_ROOT}${url}`, data, getHeader()).then(respose),
    put: (url, data) => http.put(`${API_ROOT}${url}`, data, getHeader()).then(respose),
    delete: url => http.delete(`${API_ROOT}${url}`, getHeader()).then(respose)
}

export default request