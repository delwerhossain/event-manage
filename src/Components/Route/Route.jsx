
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Home/Home";

import OurTeam from "../OurTeam/OurTeam";
import About from "../About/About";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SingleService from "../Services/SingleService";


const route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><SingleService/></PrivateRoute>
            },
            {
                path: '/OurTeam',
                element:<PrivateRoute> <OurTeam></OurTeam></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]
    }
])
export default route;