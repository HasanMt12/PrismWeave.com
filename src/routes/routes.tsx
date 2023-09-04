import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/homePage/HomePage";
import ProfileLayout from "../Layout/ProfileLayout";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ClubPage from "../pages/ClubPage/ClubPage";
import FollowPage from "../pages/FollowPage/FollowPage";
import WatchPage from "../pages/WatchPage/WatchPage";
import Message from "../pages/Message/Message";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout  />,
        children:[
          {
            path:'/',
            element: <HomePage/>
          },
          {
            path: '/club',
            element: <ClubPage></ClubPage>,
          },
          {
            path: '/follow',
            element: <FollowPage></FollowPage>
          },
          {
            path: '/watch',
            element: <WatchPage></WatchPage>
          },
          {
            path: '/message',
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
])

export default routes