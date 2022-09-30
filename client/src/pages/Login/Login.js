import React from "react";
/* import "./style.css"; */
import Auth from "../../utils/auth";

export default function Login() {

    
    if (Auth.loggedIn()) {
        return (
            <div>
                LOGIN PAGE: You're logged in!
            </div>
        )
    };
    return (
        <div>
            LOGIN PAGE: You're scary terry!
        </div>
    );
};