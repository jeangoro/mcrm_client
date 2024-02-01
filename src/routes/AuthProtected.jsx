import React  from "react";
import { useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";

import {hasAnyAuthority} from '../store/auth'

const AuthProtected = (props) => {
  const {roles} = props
  const isAuthenticated = useSelector(state => state.authentication.isAuthenticated);
  const sessionHasBeenFetched = useSelector(state => state.authentication.getAccountLoaded);
  const account = useSelector((state) => state.authentication.account)
  const isAuthorized = hasAnyAuthority(roles, account);

  if (!props.children) {
    throw new Error(`A component needs to be specified for private route for path`); // add path
  }

  if (!sessionHasBeenFetched) {
    return <div></div>;
  }

  if (isAuthenticated) {
    if (isAuthorized) {
      return <>{props.children}</>;
    }
    return <div>You are not authorized to access this page</div>; // Manage 403 error
  } else {
    return (
        <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }
};

export { AuthProtected };