import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Signin from "../pages/login/Signin";
import Signup from "../pages/login/Signup";
import DashboardHome from "../pages/dashboard/DashboardHome";
import ForgetPassword from "../pages/login/ForgetPassword";
import Home from "../pages/home/Home";
import SettingLayout from "../components/layouts/SettingLayout";
import Overview from "../pages/settings/Overview";
import OrganizationManage from "../pages/settings/OrganizationManage";
import Members from "../pages/settings/Members";
import Billing from "../pages/settings/Billing";
import Profile from "../pages/settings/Profile";
import Security from "../pages/settings/Security";
import Notyfications from "../pages/settings/Notyfications";
import Api from "../pages/settings/Api";
import CreateOrganizationS1 from "../pages/createOrganization/CreateOrganizationS1";
import CreateOrganizationS2 from "../pages/createOrganization/CreateOrganizationS2";
import Plans from "../pages/settings/Plans";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "home",
        element: <DashboardHome />,
      },
    ],
  },
  {
    path: "/:orgId/settings",
    element: (
      <PrivateRoute>
        <SettingLayout />
      </PrivateRoute>
    ),
    loader: ({ params }) => params?.orgId,
    children: [
      {
        path: "",
        element: <Overview />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "organization",
        element: <OrganizationManage />,
      },
      {
        path: "members",
        element: <Members />,
      },
      {
        path: "billing",
        element: <Billing />,
      },
      {
        path: "plans",
        element: <Plans />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "security",
        element: <Security />,
      },
      {
        path: "notyfications",
        element: <Notyfications />,
      },
      {
        path: "api",
        element: <Api />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <ForgetPassword />,
  },
  {
    path: "/create-organization-s1",
    element: <CreateOrganizationS1 />,
  },
  {
    path: "/create-organization-s2",
    element: <CreateOrganizationS2 />,
  },
]);
