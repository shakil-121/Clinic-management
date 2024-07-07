import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import DashboardLayout from "../dashboard/DashboardLayout/DashboardLayout";
import UserDashboardHome from "../dashboard/User/UserDashboardHome/UserDashboardHome";
import UserHistory from "../dashboard/User/UserHistory/UserHistory";
import History from "../dashboard/Admin/History/History";
import AdminHomeDashboard from "../dashboard/Admin/AdminHomeDashboard/AdminHomeDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <UserDashboardHome />,
      },
      {
        path: "userHistory",
        element: <UserHistory />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "adminDashboard",
        element: <AdminHomeDashboard />,
      },
    ],
  },
]);

export default router;
