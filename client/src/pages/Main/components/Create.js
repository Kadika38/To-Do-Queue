import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_TODO } from "../../../utils/mutations";

export default function Create(props) {
    const titleRef = React.useRef();
    const repeatRef = React.useRef();
    const rtRef = React.useRef();

    const [addTodo] = useMutation(ADD_TODO);

    const createFormHandler = async (event) => {
        event.preventDefault();

        const rt = parseInt(rtRef.current.value);

        const now = parseInt(new Date());


        if (repeatRef.current.checked) {
            try {
                const { data } = await addTodo({
                    variables: { profileId: props.userId, title: titleRef.current.value, repeat: true, repeatTime: rt, creation: now }
                });
            } catch (error) {
                console.log(JSON.stringify(error.networkError));
            }
        } else {
            try {
                const { data } = await addTodo({
                    variables: { profileId: props.userId, title: titleRef.current.value, repeat: false }
                });
            } catch (error) {
                console.log(error);
            }
        }

        titleRef.current.value = "";
    }

    return (
        <div>
            <form onSubmit={(event) => createFormHandler(event)}>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" ref={titleRef}></input>
                <label htmlFor="repeat">Repeat? </label>
                <input type="checkbox" id="repeat" ref={repeatRef}></input>
                <label htmlFor="repeat-time">Repeat when?</label>
                <input type="number" id="repeat-time" ref={rtRef}></input>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};