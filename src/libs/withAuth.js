import React from 'react';

// react-router-dom
import { Redirect } from 'react-router-dom';

export function withAuth(Component) {
  return function WrappedWithAuth(props) {
    const token = localStorage.getItem('token');
    
    return token !== null ? <Component {...props} /> : <Redirect to="/auth" />;
  };
}
