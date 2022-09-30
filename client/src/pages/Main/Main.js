import React from "react";
import { Navigate } from "react-router-dom";
/* import "./style.css"; */
import Auth from "../../utils/auth";

export default function Main() {
    if (!Auth.loggedIn()) {
        console.log("hello?");
        return (
            <Navigate to="/login" replace={true} />
        )
    }

    return (
        <div>
            MAIN: You're scary terry!
        </div>
    );
};