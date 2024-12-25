import { axiosInstance } from 'src/config/axiosConfig';
import { API_PATHS } from 'src/constants/apiPaths';

const ACCESS_TOKEN_KEY = 'access_token';
const FIXED_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_FIXED_ACCESS_TOKEN ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NTQ2NTY3Y2M2MGRkMTczZDkxMmRmZCIsInRlbGVJZCI6IjQ4OTk1NjY5MyIsInVzZXJuYW1lIjoiY2xpbmtzMiIsImlhdCI6MTczMzU4NDM2MSwiZXhwIjoyMjUxOTg0MzYxfQ.PXCgTODz8aqWxXc_XIzURr5xFrcNN_J86mPSz00MklQ';

type LoginResponse = {
  accessToken: string;
  user?: any;
};

export const getAccessToken = () => {
  if (FIXED_ACCESS_TOKEN) {
    return FIXED_ACCESS_TOKEN;
  }
  return localStorage.getItem(ACCESS_TOKEN_KEY) || '';
};

export const setAccessToken = (token: string) => {
  if (!FIXED_ACCESS_TOKEN) {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  }
};

export const clearTokens = () => {
  if (!FIXED_ACCESS_TOKEN) {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }
};

export const login = async (credentials: { authCode: string }) => {
  const response: LoginResponse = await axiosInstance.post(API_PATHS['auth.login'], credentials);

  if (response.accessToken) {
    const { accessToken, user } = response;
    setAccessToken(accessToken);

    // expectation user info return from BE; will fill it in later.
    return user;
  }
  throw new Error('Login failed');
};
