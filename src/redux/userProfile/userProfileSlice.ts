import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { baseUrl, userEndPoint } from 'src/config';


interface UserDetails {
    full_name: string;
    official_email: string;
    emp_id: string;
    mobile: string;
    personal_email: string;
    state: string;
    city: string;
    address: string;
    pin_code: string; 
    profile_image_url:string;
    designation:string;
}

interface UserState {
  userDetails: UserDetails | null;
  loading: boolean;
  error: string | null;
  updateSuccess: boolean;
}

const initialState: UserState = {
  userDetails: null,
  loading: false,
  error: null,
  updateSuccess: false,
};

export const getUserDetails = createAsyncThunk<
  UserDetails,                         
  number,     
  { rejectValue: string }        
>(
  'user/getUserDetails',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}${userEndPoint}${id}`, {
        headers: {
          token: localStorage.getItem('token') || '',
        },
      });
      return response.data;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch user');
    }
  }
);

export const updateUser = createAsyncThunk<
  UserDetails,
  { id: number; formState: UserDetails },
  { rejectValue: string }
>(
  'user/updateUser',
  async ({ id, formState }, thunkAPI) => {
    try {
      const response = await axios.put(
        `${baseUrl}${userEndPoint}${id}`,
        formState,
        {
          headers: {
            token: localStorage.getItem('token') || '',
          },
        }
      );
      return response.data;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to update user');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUpdateSuccess(state) {
      state.updateSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserDetails.fulfilled, (state, action: PayloadAction<UserDetails>) => {
        state.loading = false;
        state.userDetails = action.payload;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Unknown error occurred';
      })

      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.updateSuccess = false;
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<UserDetails>) => {
        state.loading = false;
        state.userDetails = action.payload;
        state.updateSuccess = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to update user';
        state.updateSuccess = false;
      });
  },
});

export const { resetUpdateSuccess } = userSlice.actions;
export default userSlice.reducer;