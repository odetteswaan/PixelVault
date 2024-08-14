import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const hasAuthenticated = true;

  return (
    <>
      {hasAuthenticated ? <Outlet /> : <Navigate to="/login" replace={true} />}
    </>
  );
}

export default ProtectedRoutes;
