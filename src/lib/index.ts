import axios from 'axios';

const dummyapi_api_url = 'https://dummyapi.io/data/v1';

const api_key = '6267d008536f373aeb532ca6';

const reqres_api_url = 'https://reqres.in/api/';

const dummyapi_client = axios.create({
  baseURL: dummyapi_api_url,
});

const reqres_client = axios.create({
  baseURL: reqres_api_url,
});

dummyapi_client.defaults.headers.common['app-id'] = api_key;

export const dummyapi = dummyapi_client;

export const reqres = reqres_client;
