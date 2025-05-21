import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl, loginEndPoint } from 'src/config';

interface User {
  id: number;
  emp_id: string;
  official_email: string;
  full_name: string;
  designation: string;
  user_role: string;
  status: string;
}

interface LoginState {
  user: User | null;
  token: string | null;
  role: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  user: null,
  token: null,
  role: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (credentials:any, thunkAPI) => {
    try {
      const response = await axios.post(
        `${baseUrl}${loginEndPoint}`,
        credentials
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      state.error = null;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.role = action.payload.user.user_role;
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', JSON.stringify(action.payload.user));
        localStorage.setItem('role', action.payload.user.user_role);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
