import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import NotFound from '../pages/common/NotFound';
import Unauthorized from '../pages/common/Unauthorized';
import AdminRoutes from './AdminRoutes';
import CustomerRoutes from './CustomerRoutes';
import EmployeeRoutes from './EmployeeRoutes';


const AppRoutes = () => {
  return (
    <Routes>
        {/* Public Routes */} {/*issue is here */}
        <Route element={<MainLayout/>}>
           <Route path='/login' element={<Login/>}/>
           <Route path='/register' element={<Register/>}/> 
        </Route>

        {/* For Role-Based access */}
        {AdminRoutes}
        {CustomerRoutes}
        {EmployeeRoutes}

        {/* Common Routes */}
        <Route path='/unauthorized' element={<Unauthorized/>}/>
        <Route path='/' element={<Navigate to="/login" replace/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
};

export default AppRoutes;
