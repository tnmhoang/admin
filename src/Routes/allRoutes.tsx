import { Navigate } from "react-router-dom";

//Calendar
import Calendar from "../pages/Calendar";
import MonthGrid from "../pages/Calendar/monthGrid";

//Chat
import Chat from "../pages/Chat";

//Maps
import GoogleMaps from "../pages/Maps/GoogleMaps/GoogleMaps";

//login
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

// User Profile
import UserProfile from "../pages/Authentication/user-profile";



import Dashboard from "pages/Dashboard";


const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/index", component: <Dashboard /> },
  { path: "/apps-calendar", component: <Calendar /> },
  { path: "/apps-calendar-month-grid", component: <MonthGrid /> },

  

  //Chat
  { path: "/apps-chat", component: <Chat /> },

  //Maps
  { path: "/maps-google", component: <GoogleMaps /> },

  //User Profile
  { path: "/profile", component: <UserProfile /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },
  { path: "/dashboard", component: <Dashboard /> },


];

export { authProtectedRoutes, publicRoutes };

