import React from "react";
import { Navigate } from "react-router-dom";
import "./style.css";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { ONE_USER } from "../../utils/queries";

export default function Main() {

    /* const userId = Auth.getUser().data._id; */
    let userId = null;
    if (Auth.loggedIn) {
        userId = Auth.getUser().data._id;
    }

    const { loading, data } = useQuery(ONE_USER, {
        skip: (!Auth.loggedIn()),
        variables:{
            profileId: userId,
        },
    });
    //LATER: check for todos whose deadline has passed and immediately useMutation to add new ones if they were recurring

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

    const todos = data.oneUser.todos;
    const todoQueue = [...todos];
    todoQueue.sort((a, b) => a.deadline-b.deadline);
    
    //date testing
    const f = new Date();
    console.log(f);

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