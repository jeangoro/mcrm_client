import React from 'react';
import {Outlet, Route, Routes,} from 'react-router-dom';

const ErrorBoundaryRoutes = ({ children }) => {
  return (
      <React.Fragment>
          <Routes>
              <Route element={<Outlet />}>
                  {children}
              </Route>
          </Routes>
      </React.Fragment>
  );
};

export default ErrorBoundaryRoutes;
