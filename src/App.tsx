import { lazy, Suspense } from 'react';
import './App.css'
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from './models';
import { AuthGuard } from './guards';
import RoutesWithNotFound from './utilities/routes-with-not-found';
import { Provider } from "react-redux";
import store from "./redux/store";

const Login = lazy(() => import('./pages/Login/Login'));
const Private = lazy(() => import('./pages/Private/Private'));

const App: React.FC = () => {

  return (
    <div className="App">
      <Suspense fallback={<>LOADING APP...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route path='/' element={<AuthGuard />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
