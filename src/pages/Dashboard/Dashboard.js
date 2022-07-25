import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../components/DashboardSidebar';

const Dashboard = () => {
    return (
        <div>
            <DashboardSidebar>
                <Outlet />
            </DashboardSidebar>
        </div>
    );
};

export default Dashboard;