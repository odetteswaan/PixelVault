export const baseUrl = 'https://pixel-vault-app-rails.onrender.com';
export const getAssets = '/api/v1/assets';
export const addAsset = '/api/v1/assets';
export const assetDetail = (productId: string | null | number) =>
  `/api/v1/assets/${productId}`;
export const deallocate = '/api/v1/asset_allocations/deallocate';
export const asset_allocations = '/api/v1/asset_allocations';
export const assetHistory = (productId: string | number | null) =>
  `/api/v1/history?asset_id=${productId}`;
export const assetbyname = '/api/v1/assets_by_name';
export const emailByQuery = (value: string | null) =>
  `/api/v1/users_by_email?query=${value}`;
export const loginEndPoint = '/api/v1/login';
export const signupEndPoint = '/api/v1/users';
export const userEndPoint = '/api/v1/users/';
export const forgotPasswordEndPoint = '/api/v1/forgot_password';
export const dashboardDataEndPoint = '/api/v1/dashboard_data_1';
export const fullNamePlaceholder = 'Camero Jorden';
export const emailPlaceholder = 'camero.jorden@company.com';
export const employIdPlaceholder = '1004320';
export const mobileNumberPlaceholder = '9876543210';
export const addressPlaceholder =
  'KSD Enclave Kondapur\nHyderabad, Telangana, 500050';
