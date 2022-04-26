import axios from 'axios';

const api_url = 'https://dummyapi.io/data/v1';

const api_key = '6267d008536f373aeb532ca6';

const client = axios.create({
  baseURL: api_url,
});

client.defaults.headers.common['app-id'] = api_key;

export default client;
