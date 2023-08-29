import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from "App";
import Home from 'components/home/Home';

const router = createBrowserRouter([
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