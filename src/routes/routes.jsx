import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../components/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: 'my-profile',
            Component: MyProfile
        }
    ],
  },
  {
    path: 'login',
    Component: Login
  },
  {
    path: 'register',
    Component: Register
  },
]);
