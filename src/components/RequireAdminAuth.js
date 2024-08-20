// RequireAdminAuth.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { FirebaseContext } from '../FirebaseContext';  // Use context from FirebaseContext

const RequireAdminAuth = ({ children }) => {
  const { currentUser, isAdmin } = useContext(FirebaseContext);

  if (!currentUser || !isAdmin) {
    // If the user is not authenticated or not an admin, redirect to login
    return <Navigate to="/admin/login" />;
  }

  // If the user is authenticated and is an admin, allow access
  return children;
};

export default RequireAdminAuth;
