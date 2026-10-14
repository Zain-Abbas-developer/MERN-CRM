import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AdminRoutes from "./AdminRoutes";
import CustomerRoutes from "./CustomerRoutes";
import EmployeeRoutes from "./EmployeeRoutes";

//common pages are here
import Landing from "../pages/common-field/HomePage";
import NotFound from "../pages/common/NotFound";
import Unauthorized from "../pages/common/Unauthorized";

// product pages are here
import Features from '../pages/product/Features';
import Pricing from '../pages/product/Pricing';
import Integration from '../pages/product/Integrations';
import ChangeLog from '../pages/product/ChangeLog';
import Roadmap from '../pages/product/Roadmap';

//company pages are here
import AboutUs from '../pages/company/AboutUs';
import Career from '../pages/company/Careers';
import Blog from '../pages/company/Blog';
import ContactUs from '../pages/company/Contacts';
import Partners from '../pages/company/Partners';


const AppRoutes = () => {
  return (
    <Routes>
      <Route index path="/home_page" element={<Landing />} />

      {/* Product pages */}
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/integrations" element={<Integration />} />
      <Route path="/changelog" element={<ChangeLog />} />
      <Route path="/roadmap" element={<Roadmap />} />

      {/* Company pages */}
      <Route path="/about us" element={<AboutUs />} />
      <Route path="/careers" element={<Career />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/partners" element={<Partners />} />


      {/* Public Routes */} {/*issue is here */}
      <Route element={<MainLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      {/* For Role-Based access */}
      {AdminRoutes}
      {CustomerRoutes}
      {EmployeeRoutes}
      {/* Common Routes */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/" element={<Navigate to="/home_page" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
