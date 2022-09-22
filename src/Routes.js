import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Dashbaord from "./components/Dashboard";
import InnerContent from "./components/InnerContent";
import Login from "./components/Login";
import PermissionDenied from "./components/PermissionDenied";
import {ProtectetRoute, UserProtectedRoute} from "./components/ProtectedRoute";
import Settings from "./components/Settings";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";
import Tabs from "./components/Tabs";
import { accessLevel } from "./constant";

const MainRoutes = () => {
    const Element = useRoutes([
        {
            element: <ProtectetRoute accessLevel = {accessLevel.ADMIN}/>,
            children: [
                {
                    path: "/",
                    element: <InnerContent />,
                    children: [
                        { path: "dashboard", element: <Dashbaord /> },
                        {
                            element: <Tabs />,
                            path: "tabs",
                            children: [
                                { path: "tabs", element: <Navigate replace to="tab1" />},
                                { path: "tab1", element: <Tab1 /> },
                                {
                                    element: <UserProtectedRoute accessLevel={accessLevel.USER} />,
                                    children:[
                                        { path: "tab2", element: <Tab2 /> },
                                    ]
                                },
                                { path: "tab3", element: <Tab3 /> }
                            ]
                        }
                    ]
                }
            ]
        }, {
            path: "login",
            element: <Login />
        },
        {
            path: "settings",
            element: <Settings />
        },
        {
            path: "accessdenied",
            element: <PermissionDenied />
        },
    ])
    return Element
}
export default MainRoutes