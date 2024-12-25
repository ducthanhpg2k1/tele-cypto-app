import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { clearTokens, getAccessToken } from 'src/services/auth/authService';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.tonexchange.io';

const GRAPHQL_URL = `${BASE_URL}/graphql`;

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT || 30000),
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosInstance: AxiosInstance = axios.create(axiosConfig);
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (process.env.NODE_ENV === 'development' && config.headers) {
      config.headers['X-Debug'] = 'true';
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      clearTokens();
      window.location.href = '/login';
    }

    if (process.env.NODE_ENV === 'development') {
      console.error('API Error:', {
        url: error.config?.url,
        method: error.config?.method,
        status: error.response?.status,
        data: error.response?.data,
      });
    }

    return Promise.reject(error);
  }
);

export { axiosInstance, GRAPHQL_URL };
