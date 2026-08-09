import React, { useState } from 'react'
import Sidebar from '../components/layout/Sidebar'
import Navbar from '../components/layout/Navbar'
import { Outlet, useLocation } from 'react-router-dom'


const routeTitles = {
  '/admin/dashboard' : 'Dashboard',
  '/admin/customers': 'Customers',
  '/admin/leads' : 'Leads',
  '/admin/tasks' : 'Tasks',
  '/admin/users' : 'Users',
  '/admin/analytics': 'Analytics',
  '/admin/chat' : 'Chat'
}

const AdminLayout = () => {
  const [collapsed, setCollapsed] = React.useState(false)
  const location = useLocation();
  const title = routeTitles[location.pathname] || 'Dashboard';
  return (
    <div className='flex'>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
      <div className='flex-1'>
        <Navbar onToggleSidebar={() => setCollapsed(!collapsed)} title={title}/>
        <main className='p-6'>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
