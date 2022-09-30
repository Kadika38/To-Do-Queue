import React from "react";
/* import "./style.css"; */
import Auth from "../../utils/auth";

export default function Main() {


    if (Auth.loggedIn()) {
        return (
            <div>
                MAIN: You're logged in!
            </div>
        )
    };
    return (
        <div>
            MAIN: You're scary terry!
        </div>
    );
};