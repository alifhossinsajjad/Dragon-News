import React, { use } from 'react';
import { Authcontex } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivetRoutes = ({children}) => {
    const {user, loading} = use(Authcontex);

    const location = useLocation()

    if(loading){
        return <Loading/>
    }
    

    if(user && user?.email) {
        return children;
    }


    return (
        <Navigate state={location.pathname} to='/auth/login'  replace></Navigate>
    );
};

export default PrivetRoutes;