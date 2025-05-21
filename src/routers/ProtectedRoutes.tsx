import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes({ requiredRole }: { requiredRole?: string }) {
  const token = localStorage.getItem('token'); 
  const hasAuthenticated = Boolean(token);
  const role = localStorage.getItem('role');
  if (!hasAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
