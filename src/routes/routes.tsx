import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/homePage/HomePage";
import ProfileLayout from "../Layout/ProfileLayout";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout  />,
        children:[
          {
            path:'/',
            element: <HomePage/>
          },
        ]
    },

     {
    path: "/profile",
    element: <ProfileLayout></ProfileLayout>,
    children: [
        {
            path: '/profile',
            element: <ProfilePage></ProfilePage>,
        },
    ]
  },
])

export default routes