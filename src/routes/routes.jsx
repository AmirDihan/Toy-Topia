import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../components/MyProfile";
import PrivateRoute from "../privateRoute/PrivateRoute";
import ForgetPassword from "../pages/ForgetPassword";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "forgot-password",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
