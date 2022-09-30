import React from "react";
/* import "./style.css"; */
import Auth from "../../utils/auth";
import { Navigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER, LOGIN_USER } from "../../utils/mutations";

export default function Login() {
    let loginURef = React.useRef();
    let loginPRef = React.useRef();
    let signupURef = React.useRef();
    let signupPRef = React.useRef();

    const [addUser] = useMutation(ADD_USER);
    const [login] = useMutation(LOGIN_USER);

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { username: loginURef.current.value, password: loginPRef.current.value }
            });

            Auth.login(data.login.token);
            
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignup = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { username: signupURef.current.value, password: signupPRef.current.value }
            });

            Auth.login(data.addUser.token);
            
        } catch (error) {
            console.log(error);
        }
    };

    if (Auth.loggedIn()) {
        return (
            <Navigate to="/main" replace={true} />
        )
    }

    return (
        <div>
            <div>Login:</div>
            <form onSubmit={(event) => handleLogin(event)}>
                <label htmlFor="loginUsername" >Username: </label>
                <input type="text" id="loginUsername" name="loginUsername" ref={loginURef} />
                <label htmlFor="loginPassword" >Password: </label>
                <input type="text" id="loginPassword" name="loginPassword" ref={loginPRef} />
                <input type="submit" value="Submit"/>
            </form>
            <div>OR</div>
            <div>Create a New Account:</div>
            <form onSubmit={(event) => handleSignup(event)}>
                <label htmlFor="signupUsername" >Username: </label>
                <input type="text" id="signupUsername" name="signupUsername" ref={signupURef} />
                <label htmlFor="signupPassword" >Password: </label>
                <input type="text" id="signupPassword" name="signupPassword" ref={signupPRef} />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};