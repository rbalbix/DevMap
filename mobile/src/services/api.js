import axios from 'axios';

baseURL: 'http://192.168.1.108:3333';

const api = axios.create({
  baseURL: 'https://rb-devmap.herokuapp.com/',
});

export default api;
