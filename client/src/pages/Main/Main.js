import React from "react";
import { Navigate } from "react-router-dom";
import "./style.css";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { ONE_USER } from "../../utils/queries";
import Create from "./components/Create";

export default function Main() {
    let userId = null;
    if (Auth.loggedIn()) {
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
    todoQueue.sort((a, b) => a.deadline-b.deadline).map((todo) => {
        return new Date(todo);
    });
    
    //date testing: this is how to store dates as ints and how to turn them back into  dates
    /* const f = new Date();
    const f2 = f.getTime();
    const f3 = new Date(f2); */

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
                    <Create userId={userId}/>
                </div>
            </div>
        </div>
    );
};