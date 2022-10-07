import React from "react";

export default function Upnext(props) {


    return (
        <div>
            <p>Title: {props.title}</p>
            <p>Deadline: {props.deadline}</p>
            <p>Repeat? {props.repeat}</p>
            <p>RepeatTime: {props.repeatTime}</p>
        </div>
    );
};