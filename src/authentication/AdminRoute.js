import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';
import Loading from '../pages/Loading';

const AdminRoute = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);

    // const location = useLocation();

    if (loading) {
        return <Loading />;
    }

    if (!admin) {
        // return <Navigate to="/login" state={{ from: location }} replace />;
        return <Navigate to="/" />
    }

    return <Outlet />;
};

export default AdminRoute;