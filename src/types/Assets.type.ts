export type User = {
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
  phone_number: null|string,
  location:null|string;
  profile_image:string
};
export type assetType = {
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
  asset_cost: number;
  processor: string;
  graphics: string;
  imei_num_1: null;
  imei_num_2: null;
  invoice: string;
  allocation_status: string;
  user: null|User;
  allocation_date: null;
  profile_image: null;
  images: string[];
};

export type assestDetailType= {
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
  asset_cost: number;
  processor: string|null;
  graphics: string | null;
  imei_num_1: string;
  imei_num_2: string;
  invoice: string;
  allocation_status: string;
  user:null;
  allocation_date: string | null;
  profile_image: string | null;
  images: string[];
   acknowledgment: null|string,
    signed_acknowledgment: null|string,
    assigned_user: User|null
};


export type Asset = {
  id: number;
  name: string;
  asset_type: string;
  brand: string;
  color: string;
  ram: string;
  storage: string;
  os: string;
  serial_number: string;
  purchase_date: string; // ISO date string or format like 'YYYY/MM/DD'
  warranty_end_date: string;
  purchased_from: string;
  purchased_type: string;
  created_at: string;
  updated_at: string;
  processor: string;
  graphics: string | null;
  imei_num_1: string | null;
  imei_num_2: string | null;
  allocation_status: string;
  asset_cost: number;
  allocation_date: string | null;
  emp_id: string | null;
  user_id: number | null;
  graphic_card: string | null;
};


export type AssetAssignment = {
  id: number;
  user: User;
  assigned_at: string;
  asset: Asset;
  returned_at: string | null;
  status: string;
  employee_name: string;
};