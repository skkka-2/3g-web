import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Layout from "../pages/Layout";
import User from "../pages/user";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/user',
        element: <User />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/notfound',
    element: <NotFound />
  }
])
export default router