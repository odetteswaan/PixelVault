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

const allRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route errorElement={<ErrorPage />}>
        <Route path={`/${paths.login}`} element={<Login />} />
        <Route path={`/${paths.signup}`} element={<Signup />} />

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
