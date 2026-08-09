import { Route, Routes } from "react-router-dom";
import EmployeeLayout from "../Layouts/EmployeeLayout";
import EmployeeGuard from "../guards/EmployeeGuard";
import Dashboard from "../pages/Employee/Dashboard";
import Tasks from "../pages/Employee/Tasks";
import Leads from "../pages/Employee/Leads";

const EmployeeRoutes = (
  <Route
    path="/employee"
    element={
      <EmployeeGuard>
        <EmployeeLayout />
      </EmployeeGuard>
    }
  >
    <Route index element={<Dashboard />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="tasks" element={<Tasks />} />
    <Route path="leads" element={<Leads />} />
  </Route>
);

export default EmployeeRoutes;
