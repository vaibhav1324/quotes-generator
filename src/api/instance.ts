import axios from 'axios';

const BASE_URL = 'https://api.quotable.io';

const DEFAULT_HEADERS: Record<string, string> = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const instance = axios.create({
  baseURL: BASE_URL,
  headers: DEFAULT_HEADERS,
});

export const api = instance;
