import React from "react";
import { Navigate } from "react-router-dom";
import "./style.css";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { ONE_USER } from "../../utils/queries";
import Create from "./components/Create";
import Upnext from "./components/Upnext";
import Todo from "./components/Todo";

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
    console.log(todoQueue);
    const next = todoQueue[0];
    const therest = todoQueue.slice(1);
    
    //date testing: this is how to store dates as ints and how to turn them back into  dates
    /* const f = new Date();
    const f2 = f.getTime();
    const f3 = new Date(f2); */

    return (
        <div className="mainContainer">
            <div className="subContainer">
                <div className="column">
                    {therest.map((item) => {
                        return (
                            <Todo _id={item._id} title={item.title} deadline={item.deadline} repeat={item.repeat} repeatTime={item.repeatTime} />
                        );
                    })}
                </div>
                <div className="column">
                    <Upnext _id={next._id} title={next.title} deadline={next.deadline} repeat={next.repeat} repeatTime={next.repeatTime} />
                </div>
                <div className="column">
                    <Create userId={userId}/>
                </div>
            </div>
        </div>
    );
};