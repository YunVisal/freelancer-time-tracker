import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from 'components/login/Login';
import LoginCallback from 'components/login/LoginCallback';
import App from "App";
import Home from 'components/home/Home';

const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/login/callback",
      element: <LoginCallback />
    },
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "report",
          element: <h1>Report</h1>
        }
      ]
    }
]);

const CustomRouter = () => {
    return <RouterProvider router={router} />
}

export default CustomRouter;