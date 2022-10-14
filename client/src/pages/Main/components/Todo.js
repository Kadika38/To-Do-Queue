import React from "react";

export default function Todo(props) {

    console.log(props);

    return (
        <div className="queue-todo">
            <p>Title: {props.title}</p>
            <p>Repeat? {props.repeat.toString()}</p>
            {props.repeat? <p>RepeatTime: {props.repeatTime}</p> : null}
            <p>Creation: {props.creation}</p>
        </div>
    );
};