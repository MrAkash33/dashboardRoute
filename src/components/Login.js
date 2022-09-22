import React from "react";

const Login = () =>{
    const login = () =>{
        localStorage.setItem('user',JSON.stringify({role:'ADMIN'}))
    }
    return <>
        <h5>I m going to Login</h5>
        <button onClick={login}>Login</button>
    </>
}

export default Login