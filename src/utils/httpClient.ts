import axios, { type AxiosInstance } from 'axios';

const baseUrl = 'https://whalehome-production.up.railway.app/';

class HttpClient {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout: 10000
    });
  }
}

const httpClient = new HttpClient().instance;

export default httpClient;
