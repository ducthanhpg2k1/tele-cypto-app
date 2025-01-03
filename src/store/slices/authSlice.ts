import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from 'src/services/auth/authService';

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  userInfo: any | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  userInfo: null,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials: { authCode: string }) => {
    const response = await login(credentials);
    return response;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
      state.userInfo = action.payload.user;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
