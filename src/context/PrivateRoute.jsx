import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthContext/AuthContext';
import Loading from '../Components/Loading';


const PrivateRoute = ({children}) => {
     const{user, loading}=use(AuthContext)
    // console.log(user);
    const location=useLocation();
    // console.log(location);

    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate to="/signIn" state={{ from: location }} replace />;
    

};

export default PrivateRoute;