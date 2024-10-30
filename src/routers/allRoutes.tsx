import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';
import ProtectedRoutes from 'src/routers/ProtectedRoutes';
import { paths } from 'src/routers/paths';
import { CounterPage, HomePage, ErrorPage } from 'src/routers/loads/lazyLoads';
import Login from '../pages/login/Login';
import Signup from 'src/pages/SignUp/Signup';
import RequestProfile from 'src/pages/userProfile/RequestProfile';
import UserProfile from 'src/pages/userProfile/UserProfile';

const allRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route errorElement={<ErrorPage />}>
        <Route path={`/${paths.login}`} element={<Login />} />
        <Route path={`/${paths.signup}`} element={<Signup />} />
        <Route path={`/${paths.requestProfile}`} element={<RequestProfile />} />
        <Route path={`/${paths.userProfile}`} element={<UserProfile />} />
        <Route path={`/${paths.forgotPassword}`} element={<Login />} />

        {/* /protected */}
        <Route element={<ProtectedRoutes />} path={paths.root}>
          <Route index element={<HomePage />} />
          <Route path={paths.counter} element={<CounterPage />} />
        </Route>
      </Route>
    </>
  )
);
export default allRoutes;
