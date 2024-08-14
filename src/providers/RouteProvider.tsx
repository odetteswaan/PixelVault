import { RouterProvider } from "react-router-dom";
import allRoutes from "src/routers/allRoutes";

function RouteProvider() {
  return <RouterProvider router={allRoutes} />;
}

export default RouteProvider;
