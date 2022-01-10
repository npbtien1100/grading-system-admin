import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
//
import Login from "./pages/Login";
import DashboardApp from "./pages/DashboardApp";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Class from "./pages/Class";
import NotFound from "./pages/Page404";
import CreateAdmin from "./pages/CreateAdmin";
import Profile from "./pages/Profile";
import UserDetail from "./pages/UserDetail";
import ClassDetail from "./pages/ClassDetail";
import AdminDetail from "./pages/AdminDetail";

import RequireAuth from "./components/authentication/RequireAuth";
import RequireSignOut from "./components/authentication/RequireSignOut";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/dashboard",
      element: (
        <RequireAuth>
          <DashboardLayout />
        </RequireAuth>
      ),
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: "app", element: <DashboardApp /> },
        { path: "admins", element: <Admin /> },
        { path: "users", element: <User /> },
        { path: "classes", element: <Class /> },
        { path: "profile", element: <Profile /> },
        { path: "admins/create-admin", element: <CreateAdmin /> },
        { path: "admins/:adminId", element: <AdminDetail /> },
        { path: "users/:userId", element: <UserDetail /> },
        { path: "classes/:classId", element: <ClassDetail /> },
      ],
    },
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        {
          path: "login",
          element: (
            <RequireSignOut>
              <Login />
            </RequireSignOut>
          ),
        },
        { path: "404", element: <NotFound /> },
        { path: "/", element: <Navigate to="/dashboard" /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
