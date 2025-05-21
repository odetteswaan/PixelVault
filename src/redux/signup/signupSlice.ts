import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl, signupEndPoint } from 'src/config';

interface SignupState {
  employeeId: string;
  email: string;
  fullName: string;
  designation: string;
  password: string;
  confirmPassword: string;
  loading: boolean;
  error: string | null;
  success: boolean;
}
interface SignupFormData {
    employeeId: string;
    email: string;
    fullName: string;
    designation: string;
    password: string;
    confirmPassword: string;
  }

const initialState: SignupState = {
  employeeId: '',
  email: '',
  fullName: '',
  designation: '',
  password: '',
  confirmPassword: '',
  loading: false,
  error: null,
  success: false,
};

export const signupUser = createAsyncThunk(
  'signup',
  async (formData: SignupFormData, { rejectWithValue }) => {
    try {
      const requestBody = {
        user: {
          emp_id: formData.employeeId,
          official_email: formData.email,
          full_name: formData.fullName,
          designation: formData.designation,
          password: formData.password,
        },
      };
      const response = await axios.post(`${baseUrl}${signupEndPoint}`, requestBody,{
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue('Signup failed');
    }
  }
);

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    resetSignupState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetSignupState } = signupSlice.actions;
export default signupSlice.reducer;