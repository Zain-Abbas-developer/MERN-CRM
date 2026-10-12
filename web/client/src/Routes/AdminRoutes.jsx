import { Route, Routes } from "react-router-dom";
import AdminLayout from "../Layouts/AdminLayout";
import AdminGuard from "../guards/AdminGuard";
import Dashboard from "../pages/Admin/Dashboard";
import Customers from "../pages/Admin/Customers";
import Leads from "../pages/Admin/Leads";
import Tasks from "../pages/Admin/Tasks";
import Users from "../pages/Admin/Users";
import Analytics from "../pages/Admin/Analytics";
import Chat from "../pages/Admin/Chat";

// use protected routes
const AdminRoutes = (
    <Route
    path="/admin"
    element={
      <AdminGuard>
        <AdminLayout />
      </AdminGuard>
    }
  >
    <Route index element={<Dashboard />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="customers" element={<Customers />} />
    <Route path="leads" element={<Leads />} />
    <Route path="tasks" element={<Tasks />} />
    <Route path="users" element={<Users />} />
    <Route path="analytics" element={<Analytics />} />
    <Route path="chat" element={<Chat />} />
  </Route>
  )

export default AdminRoutes;
