import React from "react";
import { Outlet } from "react-router-dom";

const InnerContent = () =>{
    return  <div className="inner-content">
        {/* <h1>Innder</h1> */}
          <Outlet/>
    </div>
}

export default InnerContent