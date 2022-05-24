import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useIsAdmin from '../../../hooks/useIsAdmin';
import Loading from '../../sheared/Loading/Loading';

const RequireAdmin = ({children}) => {
  const [isAdmin, isAdminLoading] = useIsAdmin();
  let location = useLocation();

  if (isAdminLoading) {
    return <Loading/>
  }

  if (isAdmin) {
    return children;
  }
  else {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

};

export default RequireAdmin;