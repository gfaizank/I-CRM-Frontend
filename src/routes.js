import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import People from "views/admin/people";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdPeople,
  MdLock,
  MdAssignment
} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "People ",
    layout: "/admin",
    path: "people",
    icon: <MdPeople className="h-6 w-6" />,
    component: <People />
    // component: <NFTMarketplace />,
    // secondary: true,
  },
  {
    name: "Project",
    layout: "/admin",
    path: "profile",
    icon: <MdBarChart className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Client",
    layout: "/admin",
    icon: <MdPerson className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Sign in",
    layout: "/auth",
    path: "sign-in",
    icon: <MdAssignment className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Settings",
    layout: "/rtl",
    path: "rtl",
    icon: <MdLock className="h-6 w-6" />,
    component: <RTLDefault />,
  },
];
export default routes;
