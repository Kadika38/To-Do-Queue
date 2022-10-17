import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./style.css";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { ONE_USER } from "../../utils/queries";
import Create from "./components/Create";
import Todo from "./components/Todo";

export default function Main() {
    const [tq, setTq] = useState([]);
    const [firstRender, setFirstRender] = useState(true);
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

    const doubleCheckSpots = () => {
        let copy = JSON.parse(JSON.stringify(tq));
        copy.sort((a, b) => a.spot-b.spot);
        for (let i = 0; i < copy.length; i++) {
            copy[i].spot = i;
        }
        if (copy !== tq) {
            setTq(copy);
            console.log("copy success");
        }
    };

    const todos = data.oneUser.todos;
    let todoQueue = JSON.parse(JSON.stringify(todos));
    if (firstRender) {
        setTq(todoQueue);
        setFirstRender(false);
        doubleCheckSpots();
    }

    const shift = (id, direction) => {
        doubleCheckSpots();
        let copy = tq;
        let cont = true;
        let found = false;
        if (direction === "up") {
            for (let i = copy.length-1; i >= 0; i--) {
                if (found && cont) {
                    cont = false;
                    copy[i].spot = (copy[i].spot + 1);
                }
                if (!found && cont) {
                    if (copy[i]._id === id) {
                        found = true;
                        copy[i].spot = (copy[i].spot - 1);
                    }
                }
            }
        }
        if (direction === "down") {
            for (let i = 0; i < copy.length; i++) {
                if (found && cont) {
                    cont = false;
                    copy[i].spot = (copy[i].spot - 1);
                }
                if (!found && cont) {
                    if (copy[i]._id === id) {
                        found = true;
                        copy[i].spot = (copy[i].spot + 1);
                    }
                }
            }
        }
        setTq(copy);
        doubleCheckSpots();
        console.log(copy);
    };

    const save = () => {
        //later functionality
    };

    console.log("render");
    console.log(tq);

    return (
        <div className="mainContainer">
            <div className="subContainer">
                <div className="column">
                    {tq.map((item) => {
                        return (
                            <Todo shift={shift} _id={item._id} title={item.title} repeat={item.repeat} repeatTime={item.repeatTime} creation={item.creation} />
                        );
                    })}
                </div>
                <div className="column">
                    <Create userId={userId}/>
                </div>
            </div>
        </div>
    );
};