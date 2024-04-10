import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import People from "views/admin/people";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";
import Client from "views/admin/client";
import Invoice from "views/admin/invoice";
import Project from "views/admin/project";
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
    name: "Client",
    layout: "/admin",
    icon: <MdPerson className="h-6 w-6" />,
    path: "client",
    component: <Client />,
  },
  {
    name: "Project",
    layout: "/admin",
    path: "project",
    icon: <MdBarChart className="h-6 w-6" />,
    component: <Project />,
  },

  {
    name: "Invoice",
    layout: "/admin",
    path: "invoice",
    icon: <MdAssignment className="h-6 w-6" />,
    component: <Invoice />,
  },
  {
    name: "Settings",
    layout: "/rtl",
    path: "rtl",
    icon: <MdLock className="h-6 w-6" />,
    component: <RTLDefault />,
  },
  {
    // name: "Sign in",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6 text-white" />,
    component: <SignIn />
  }
];
export default routes;
