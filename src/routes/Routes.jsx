import MainLayout from "@/layouts/MainLayout";
import AddJob from "@/pages/AddJob";
import AllJobs from "@/pages/AllJobs";
import ApplyJob from "@/pages/ApplyJob";
import Home from "@/pages/Home";
import MyJobs from "@/pages/MyJobs";
import MyPostedJobs from "@/pages/MyPostedJobs";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <AllJobs />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/my-posted-jobs",
        element: <MyPostedJobs />,
      },
      {
        path: "/add-jobs",
        element: <AddJob />,
      },
      {
        path: "/jobs/apply/:id",
        element: <ApplyJob />,
      },
      {
        path: "/auth/signup",
        element: <SignUp />,
      },
      {
        path: "/auth/signin",
        element: <SignIn />,
      },
    ],
  },
]);
