import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { accessLevel } from "../constant";

const useAuth = () => {
    const user = localStorage.getItem('user')
    if (user) {
        return true
    }
    else {
        return false
    }
}

const ProtectetRoute = (props) => {
    console.log("i am calling")
    myFunction();
    console.log(props.accessLevel, "props");
    const auth = useAuth()
    return auth ?
        ((accessLevel.ADMIN === props.accessLevel)
            ?  <Outlet /> 
        : <Navigate to="/accessdenied" replace />) 
    : <Navigate to="/login" replace />
}

const UserProtectedRoute = (props) =>{  
    console.log(props);
    const auth = useAuth()
    return auth ?
    ((accessLevel.USER === props.accessLevel)
            ?  <Outlet /> 
        : <Navigate to="/accessdenied" replace />) 
    : <Navigate to="/login" replace />
}
function checkExpiration (){ 
    localStorage.removeItem("user")
}

function myFunction() {    
    var myinterval = 1000;
    setTimeout(function(){ checkExpiration(); }, myinterval );
}

export  { 
        ProtectetRoute,
        UserProtectedRoute
    }