import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes({ requiredRole }: { requiredRole?: string }) {
  const hasAuthenticated = true;
  const role = 'admin';
  localStorage.setItem('role', role);
  if (!hasAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
