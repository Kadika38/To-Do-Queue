import React from "react";

export default function Upnext(props) {


    return (
        <div>
            <p>Title: {props.title}</p>
            <p>Repeat? {props.repeat}</p>
            <p>RepeatTime: {props.repeatTime}</p>
            <p>Creation: {props.creation}</p>
        </div>
    );
};