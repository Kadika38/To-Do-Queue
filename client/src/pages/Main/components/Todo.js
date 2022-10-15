import React from "react";

export default function Todo(props) {

    return (
        <div className="queue-todo">
            <p>Title: {props.title}</p>
            <p>Repeat? {props.repeat.toString()}</p>
            {props.repeat? <p>RepeatTime: {props.repeatTime}</p> : null}
            <p>Creation: {props.creation}</p>
            <button onClick={() => props.shift(props._id, "up")}>Up</button>
            <button onClick={() => props.shift(props._id, "down")}>Down</button>
        </div>
    );
};