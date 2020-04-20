import axios from 'axios';

// Dev
// baseURL: 'http://localhost:3333'

const api = axios.create({
  baseURL: 'https://rb-devmap.herokuapp.com/',
});

export default api;
