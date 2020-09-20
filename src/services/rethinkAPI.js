import axios from 'axios';

const rethinkAPI = axios.create({
  baseURL: 'https://rethink-webstack-flights.herokuapp.com',
});

export default rethinkAPI;
