import axios from 'axios';

const rethinkAPI = axios.create({
  baseURL: 'https://rethink-webstack-flights.herokuapp.com/api',
});

export default rethinkAPI;
