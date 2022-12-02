import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loadable from 'react-loadable';

import Signin from './components/Signin';
import Secrets from './components/Secrets';


const delay = 250;
const timeout = 10000;

const routeMap = [
  {
    path: '/',
    element: Secrets,
    exact: true,
    dynamic: false,

  },
  {
    path: '/login',
    element: Signin,
    exact: true,
    dynamic: false,

  },
  {
    path: '/secrets',
    element: Secrets,
    exact: true,
    dynamic: false,
  }
];

const Router = () => {
  // let token = localStorage.getItem('token');
  // if (!token) {
  //   window.location.href = '/login';
  // }
  return (
    <BrowserRouter>
      <Routes>
        {routeMap.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            exact={item.exact}
            element={
              item.dynamic
                ? Loadable({
                  loader: () => import(`${item.element}`),
                  delay,
                  timeout,
                })
                : <item.element address='5GsM73jBMKTgQaFLqdyvAy3wZAD7wFCx6RQvpMoFuQW6cSP7' />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
