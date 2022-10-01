import React from "react";
import { Navigate } from "react-router-dom";
import "./style.css";
import Auth from "../../utils/auth";

export default function Main() {
    if (!Auth.loggedIn()) {
        return (
            <Navigate to="/login" replace={true} />
        )
    }

    return (
        <div className="mainContainer">
            <div className="subContainer">
                <div className="column">
                    QUEUE
                </div>
                <div className="column">
                    UPNEXT
                </div>
                <div className="column">
                    CREATE NEW
                </div>
            </div>
        </div>
    );
};