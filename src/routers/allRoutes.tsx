import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';
import ProtectedRoutes from 'src/routers/ProtectedRoutes';
import { paths } from 'src/routers/paths';
import { CounterPage, ErrorPage } from 'src/routers/loads/lazyLoads';
import Login from '../pages/login/Login';
import Signup from 'src/pages/SignUp/Signup';
import RequestProfile from 'src/pages/userProfile/RequestProfile';
import UserProfile from 'src/pages/userProfile/UserProfile';
import Dashboard from 'src/pages/Dashboard/Employee/Dashboard';
import AdminDashboard from 'src/pages/Dashboard/Admin/AdminDashboard';
import MainLayout from 'src/components/layout/MainLayout';
import AllAllocatedAssets from 'src/pages/AssetAllocationLogs/AllAllocatedAssets';
import AllIssues from 'src/pages/IssuesRaised/AllIssues';
import EmployeeList from 'src/pages/employeeList/EmployeeList';
import EmployeeProfile from 'src/pages/employeeProfile/EmployeeProfile';
import RequestNewAsset from 'src/pages/AssetAllocationLogs/RequestNewAsset';

import AddNewAsset from 'src/pages/Admin/AddNewAsset';
import AllAssets from 'src/pages/Admin/AllAssets';
import RaisedTickets from 'src/pages/Admin/RaisedTickets';
import WarrantyExpiring from 'src/pages/Admin/WarrantyExpiring';
import EmployeeAssetAllocation from 'src/pages/Admin/EmployeeAssetAllocation';
import AssetDetail from 'src/pages/Admin/AssetDetail';
const allRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route errorElement={<ErrorPage />}>
        <Route path={`/${paths.login}`} element={<Login />} />
        <Route path={`/${paths.signup}`} element={<Signup />} />
        <Route path={`/${paths.forgotPassword}`} element={<Login />} />
        <Route path={`/${paths.requestProfile}`} element={<RequestProfile />} />
        <Route
          element={<ProtectedRoutes requiredRole="user" />}
          path={paths.root}
        >
          <Route element={<MainLayout />} path={paths.root}>
            <Route index element={<UserProfile />} />
            <Route path={`/${paths.userProfile}`} element={<UserProfile />} />
            <Route path={`/${paths.dashboard}`} element={<Dashboard />} />
            <Route path={`/${paths.assets}`} element={<AllAllocatedAssets />} />
            <Route path={`/${paths.issues}`} element={<AllIssues />} />
            <Route path={`/${paths.newTicket}`} element={<Dashboard />} />
            <Route path={`/${paths.requestAsset}`} element={<RequestNewAsset />} />
            <Route path={`/${paths.logout}`} element={<Dashboard />} />
          </Route>
        </Route>

        {/* /protected */}
        <Route
          element={<ProtectedRoutes requiredRole="admin" />}
          path={paths.adminRoot}
        >
          <Route element={<MainLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path={paths.counter} element={<CounterPage />} />
            <Route path={paths.employeeProfile} element={<EmployeeProfile/>} />
            <Route path={`${paths.addNewAsset}`} element={<AddNewAsset/>}/>
            <Route path={paths.allAssets} element={<AllAssets/>}/>
            <Route path={paths.raisedTickets} element={<RaisedTickets/>}/>
            <Route path={paths.warranty} element={<WarrantyExpiring/>} />
            <Route path={paths.AssetAllocated} element={<EmployeeAssetAllocation/>}/>
            <Route path={paths.employee} element={<EmployeeList />} />
            <Route path={paths.AssetDetail} element={<AssetDetail/>}/>
            <Route path={paths.logout} element={<AdminDashboard />} />
          </Route>
        </Route>
      </Route>
    </>
  )
);
export default allRoutes;
