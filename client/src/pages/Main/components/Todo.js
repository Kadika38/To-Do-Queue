import React from "react";

export default function Todo(props) {


    return (
        <div className="queue-todo">
            <p>Title: {props.title}</p>
            <p>Deadline: {props.deadline}</p>
            <p>Repeat? {props.repeat}</p>
            <p>RepeatTime: {props.repeatTime}</p>
        </div>
    );
};