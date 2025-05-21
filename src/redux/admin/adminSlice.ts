import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl, dashboardDataEndPoint } from 'src/config';


  interface Asset {
    id: number;
    name: string;
    asset_type: string;
    brand: string;
    color: string;
    ram: string;
    storage: string;
    os: string;
    serial_number: string;
    purchase_date: string;
    warranty_end_date: string;
    purchased_from: string;
    purchased_type: string;
    created_at: string;
    updated_at: string;
    processor: string | null;
    graphics: string | null;
    imei_num_1: string | null;
    imei_num_2: string | null;
    allocation_status: "available" | "allocated" | null;
    asset_cost: number;
    allocation_date: string | null;
    emp_id: string | null;
    user_id: number | null;
    user?: User;
  };
  
  interface User {
    id: number;
    emp_id: string;
    official_email: string;
    full_name: string;
    designation: string;
    password: string | null;
    mobile: string | null;
    personal_email: string | null;
    city: string | null;
    state: string | null;
    pin_code: string | null;
    address: string | null;
    user_role: string;
    created_at: string;
    updated_at: string;
    password_digest: string;
    status: string;
  };
  
  interface AssetPercentageData {
    asset_type: string;
    count: number;
    percentage: string;
  };
  
  interface AssetGraph {
    total_assets: number;
    percentage_data: AssetPercentageData[];
  };
  
  interface Tickets {
    raised: number;
    resolved: number;
    in_progress: number;
    total: number;
  };
  
  interface DashboardData {
    total_assets: number;
    assets_in_stock: number;
    total_amount: number;
    new_asset_requests: number;
    warranty_expiring_data: Asset[];
    recent_assets_allocated: Asset[];
    recent_assets_added: Asset[];
    allocated_assets_graph: AssetGraph;
    total_assets_graph: AssetGraph;
    tickets_raised: Tickets;
  };
  

interface DashboardState {
  data: DashboardData | null;
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchDashboardData = createAsyncThunk<
  DashboardData,   
  string,
  { rejectValue: string }
>('dashboard/fetchDashboardData', async (token, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${baseUrl}${dashboardDataEndPoint}`, {
      headers: {
        token:token,
      },
    });
    return response.data as DashboardData;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch dashboard data');
  }
});

const adminSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action: PayloadAction<DashboardData>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Unknown error';
      });
  },
});

export default adminSlice.reducer;