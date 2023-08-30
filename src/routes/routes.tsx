import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/homePage/HomePage";

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

])

export default routes