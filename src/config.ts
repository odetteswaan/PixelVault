export const baseUrl="https://pixel-vault-app-rails.onrender.com"
export const getAssets="/api/v1/assets?page=1&per_page=100"
export const addAsset="/api/v1/assets"
export const assetDetail=(productId:string|null|number)=>(`/api/v1/assets/${productId}`)
export const deallocate="/api/v1/asset_allocations/deallocate"
export const asset_allocations="/api/v1/asset_allocations"
export const assetHistory=(productId:string|number|null)=>(`/api/v1/history?asset_id=${productId}`)
export const allAssetHistory="/api/v1/history"
export const assetbyname="/api/v1/assets_by_name"
export const emailByQuery=(value:string|null)=>(`/api/v1/users_by_email?query=${value}`)
export const employeeStatus=(status:string)=>(`/api/v1/users?status=${status}`)
export const approveUser=(id:number|string)=>(`/api/v1/users/${id}/approve_user`)
export const approveUsers="/api/v1/approved_users"
export const assetsWarranty="/api/v1/assets_warranty"
export const employeeTickets="/api/v1/tickets"
export const ticketByAssetId=(productId:string|null)=>(`/api/v1/users_tickets_for_admin?asset_id=${productId}`)
export const ticketById=(prodId:string)=>(`/api/v1/tickets/${prodId}`)
export const changeStatus="/api/v1/tickets/update_status"
export const userAssets=(userId:string|null)=>(`/api/v1/users_assets_for_admin?user_id=${userId}`)
export const loginEndPoint = '/api/v1/login';
export const signupEndPoint = '/api/v1/users';
export const userEndPoint = '/api/v1/users/';
export const forgotPasswordEndPoint = '/api/v1/forgot_password';
export const dashboardDataEndPoint = '/api/v1/dashboard_data_1';
export const fullNamePlaceholder = 'Camero Jorden';
export const emailPlaceholder = 'camero.jorden@company.com';
export const employIdPlaceholder = '1004320';
export const mobileNumberPlaceholder = '9876543210';
export const addressPlaceholder ='KSD Enclave Kondapur\nHyderabad, Telangana, 500050';
export const userById=(user_id:string|number)=>(`/api/v1/users/${user_id}`)