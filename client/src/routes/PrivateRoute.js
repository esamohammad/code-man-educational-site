import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

/* 
1. only allow authenticated user to visit the route
2. 
3. Redirect user to the route they wanted to go before login
*/

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) { //!  rederect source 💥💥💥💥💥💥💥💥
        return <svg className="animate-bounce w-6 h-6 ...">

        </svg>


    }


    if (!user) { // ! rederect source 💥💥💥💥💥💥💥💥

        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default PrivateRoute;