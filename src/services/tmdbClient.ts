import axios from 'axios';
import { TMDB_READ_ACCESS_TOKEN } from '../config/tmdb';
import { TMDB_BASE_URL } from '../constants/tmdb';

const tmdbClient = axios.create({
  baseURL: TMDB_BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${TMDB_READ_ACCESS_TOKEN}`,
    Accept: 'application/json',
  },
});

export default tmdbClient;
