import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_TODO } from "../../../utils/mutations";

export default function Create(props) {
    const titleRef = React.useRef();
    const deadlineRef = React.useRef();
    const repeatRef = React.useRef();
    const rtRef = React.useRef();

    const [addTodo] = useMutation(ADD_TODO);

    const createFormHandler = async (event) => {
        event.preventDefault();

        const repeatBool = (repeatRef.current.value === "on") ? true : false;
        const rt = parseInt(rtRef.current.value);
        
        if (repeatBool) {
            try {
                const { data } = await addTodo({
                    variables: { profileId: props.userId, title: titleRef.current.value, deadline: deadlineRef.current.value, repeat: repeatBool, repeatTime: rt }
                });
            } catch (error) {
                console.log(JSON.stringify(error.networkError));
            }
        } else {
            try {
                const { data } = await addTodo({
                    variables: { profileId: props.userId, title: titleRef.current.value, deadline: deadlineRef.current.value, repeat: false }
                });
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div>
            <form onSubmit={(event) => createFormHandler(event)}>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" ref={titleRef}></input>
                <label htmlFor="deadline">Deadline: </label>
                <input type="datetime-local" id="deadline" ref={deadlineRef}></input>
                <label htmlFor="repeat">Repeat? </label>
                <input type="checkbox" id="repeat" ref={repeatRef}></input>
                <label htmlFor="repeat-time">Repeat when?</label>
                <input type="number" id="repeat-time" ref={rtRef}></input>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};