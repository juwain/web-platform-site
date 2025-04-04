import axios, { AxiosInstance, AxiosResponse } from 'axios';

let instance: AxiosInstance;

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    if (!instance) {
      instance = this;
    }

    this.client = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      timeout: 5000,
      headers: { 'Content-Type': 'application/json' },
    });

    return instance;
  }

  get<T = any>(endpoint: string): Promise<AxiosResponse<T>> {
    return this.client.get<T>(endpoint);
  }
}

const apiClient = Object.freeze(new ApiClient());

export default apiClient;
