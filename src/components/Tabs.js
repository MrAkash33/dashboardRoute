import React from "react";
import { Outlet,Link } from "react-router-dom";

const Tabs = () =>{
    return <div className="Tabs">
        <ul>
            <li><Link to="/tabs/tab1">Tab1</Link></li>
            <li><Link to="/tabs/tab2">Tab2</Link></li>
            <li><Link to="/tabs/tab3">Tab3</Link></li>
        </ul>
        <Outlet/>
    </div>
}

export default Tabs