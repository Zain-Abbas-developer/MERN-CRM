import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';

//route titles here
const routeTitles = {
    '/employee/dashboard': 'Dashboard',
    '/employee/tasks': 'My Tasks',
    '/employee/leads': 'Leads',
}

const EmployeeLayout = () => {
    
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const title = routeTitles[location.pathname] || 'Dashboard';
    
  return (
    <div className='flex'>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
      <div className='flex-1'>
        <Navbar onToggleSidebar={() => setCollapsed(!collapsed)} title={title}/>
        <main className='p-6'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default EmployeeLayout
