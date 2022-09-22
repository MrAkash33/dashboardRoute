import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    // const [auth,setAuth] = useState('')
    const logout = () => {
        localStorage.removeItem('user')
    }
    const useAuth = () => {
        const user = localStorage.getItem('user')
        if (user) {
            return true
        } else {
            return false
        }
    }
    const auth = useAuth();

    return <div className="sidebar">
        <ul>
            {
                auth ?
                    <>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/tabs">Tabs</Link></li>
                    </>
                    : <li><Link to="/settings">Settings</Link></li>
            }
            {auth ? <button onClick={logout}>Logout</button> : <li><Link to="/login">Login</Link></li>}
        </ul>
    </div>
}

export default SideBar