import { Asset ,User} from "./Assets.type";

export type Employee={
    id: number,
    email: string,
    name: string,
    emp_id:string
}


export type EmployeeStatus={
  id: number;
  emp_id: string;
  official_email: string;
  full_name: string;
  designation: string;
  mobile: string | null;
  personal_email: string | null;
  city: string | null;
  state: string | null;
  pin_code: string | null;
  address: string | null;
  user_role: string;
  status: string;
  profile_image_url: string | null;
  created_at: string; // ISO date string
  updated_at: string;
}
export type EmployeeTickets={
  id:number|string;
  asset:Asset;
 user_id: number;
  status: string;
  subject: string;
  query: string;
  reply: string | null;
  created_at: string; 
  updated_at: string; 
  user:User;
}