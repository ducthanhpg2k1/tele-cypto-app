import { AxiosError, AxiosResponse } from 'axios';
import { axiosInstance, GRAPHQL_URL } from './axiosConfig';

interface GraphQLRequest {
  query: string;
  variables?: Record<string, any>;
}

interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{
    message: string;
    locations: Array<{
      line: number;
      column: number;
    }>;
    path: string[];
  }>;
}

class HttpClient {
  static async get<T>(url: string, config = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axiosInstance.get(url, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }

  static async post<T>(url: string, data = {}, config = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axiosInstance.post(url, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }

  static async put<T>(url: string, data = {}, config = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axiosInstance.put(url, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }

  static async patch<T>(url: string, data = {}, config = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axiosInstance.patch(url, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }

  static async delete<T>(url: string, config = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axiosInstance.delete(url, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }

  static async graphqlQuery<T>(query: string, variables = {}): Promise<T> {
    try {
      const request: GraphQLRequest = {
        query,
        variables,
      };
      const response: AxiosResponse<GraphQLResponse<T>> = await axiosInstance.post(
        GRAPHQL_URL,
        request
      );
      if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
      }
      return response.data.data as T;
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }

  static handleTelegramAuth(initData: any) {
    return this.post('/accounts/login', {
      username: initData.user.username,
      teleId: initData.user.id,
      firstName: initData.user.firstName,
      lastName: initData.user.lastName,
      authCode: JSON.stringify(initData),
    });
  }

  private static handleError(error: AxiosError): Error {
    const errorMessage = this.getErrorMessage(error);
    if (process.env.NODE_ENV === 'development') {
      console.error('HttpClient Error:', {
        message: errorMessage,
        error: error,
      });
    }
    return new Error(errorMessage);
  }

  private static getErrorMessage(error: AxiosError): string {
    if (error.response) {
      return (error.response.data as any)?.message || error.message;
    } else if (error.request) {
      return 'No response received from server';
    }
    return 'Error setting up request';
  }
}

export default HttpClient;
