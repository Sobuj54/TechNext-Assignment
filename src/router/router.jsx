import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllUsers from "../pages/AllUsers/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AllUsers />,
      },
    ],
  },
]);

export default router;
