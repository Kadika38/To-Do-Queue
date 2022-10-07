import React from "react";

export default function Create() {
    return (
        <div>
            <form>
                <label htmlFor="title"></label>
                <input type="text" id="title"></input>
                <label htmlFor="deadline"></label>
                <input type="datetime-local" id="deadline"></input>
                <label htmlFor="repeat"></label>
                <input type="radio" id="repeat"></input>
                <label htmlFor="repeat-time"></label>
                <input type="text" id="repeat-time"></input>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};