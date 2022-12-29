import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/media',
        element: <div><h1>This is Media.</h1></div>
      },
      {
        path: '/Message',
        element: <div><h1>This is Message.</h1></div>
      },
      {
        path: '/about',
        element: <div><h1>This is About.</h1></div>
      },
      {
        path: '*',
        element: <div><h1>404!, Page not found</h1></div>
      },
    ]
  }
])
export default router;