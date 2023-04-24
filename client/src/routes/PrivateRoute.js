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

    if (loading) {
        return
        <div>
            //! spinar loader
            <button type="button" class="bg-indigo-500 ..." disabled>
                <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

                </svg>
                Processing...
            </button>
        </div>

    }


    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;