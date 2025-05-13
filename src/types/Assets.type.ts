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
  processor: null|string;
  graphics: null|string;
  imei_num_1: null;
  imei_num_2: null;
  invoice: string;
  allocation_status: string;
  user: null|{
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
    user_role: 'user' | 'admin' | string; // adjust roles as needed
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
    password_digest: string;
    status: 'pending' | 'active' | 'inactive' | string; // adjust statuses as needed
  };
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
    assigned_user: {
        id: number,
        full_name: null|string,
        emp_id: string,
        official_email: string
        personal_email: null,
        phone_number: null,
        department: null,
        designation: string,
        date_of_joining: null,
        location: null,
        profile_image: null,
      created_at: null,
        updated_at:string,
        status: string
    }|null
};


type Asset = {
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

type User = {
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

export type AssetAssignment = {
  id: number;
  user: User;
  assigned_at: string;
  asset: Asset;
  returned_at: string | null;
  status: string;
  employee_name: string;
};

