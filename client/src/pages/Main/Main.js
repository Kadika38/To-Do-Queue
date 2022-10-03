import React from "react";
import { Navigate } from "react-router-dom";
import "./style.css";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { ONE_USER } from "../../utils/queries";

export default function Main() {
    const userId = Auth.getUser().data._id;
    console.log(userId);
    const { loading, data } = useQuery(ONE_USER, {
        variables:{
            profileId: userId,
        },
    });

    if (!Auth.loggedIn()) {
        return (
            <Navigate to="/login" replace={true} />
        )
    }

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    console.log(data);

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