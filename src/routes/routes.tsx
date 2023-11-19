import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/homePage/HomePage";
import ProfileLayout from "../Layout/ProfileLayout";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ClubPage from "../pages/ClubPage/ClubPage";
import FollowPage from "../pages/FollowPage/FollowPage";
import WatchPage from "../pages/WatchPage/WatchPage";
import Message from "../pages/Message/Message";
import SignupPage from "../Auth/SignUp";
import AuthLayout from "../Layout/AuthLayout";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: <SignupPage />,
      },
 
    ]
  },
    {
        path:'/home',
        element: <MainLayout  />,
        children:[
          {
            path:'/home',
            element: <HomePage />,
          },
          {
            path: '/home/club',
            element: <ClubPage></ClubPage>,
          },
          {
            path: '/home/follow',
            element: <FollowPage></FollowPage>
          },
          {
            path: '/home/watch',
            element: <WatchPage></WatchPage>
          },
          {
            path: '/home/message',
            element: <Message></Message>
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
  // {
  //   path: '/login',
  //   element: <LoginPage />,
  // },
  // {
  //   path: '/signup',
  //   element: <SignupPage />,
  // },
])

export default routes