import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

/* 
1. only allow authenticated user to visit the route
2. 
3. Redirect user to the route they wanted to go before login
*/

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);




    if (!user) {
        return <Navigate to="/login" ></Navigate>
    }
    return children;
};

export default PrivateRoute;