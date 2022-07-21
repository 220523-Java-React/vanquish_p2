import { useState, useEffect } from "react";

import { APIPost } from "../utils/api";

export default function LoginForm({setName}){

    const [ register, setRegister ] = useState(false); 
    const [ firstName, setFirst ] = useState("");
    const [ lastName, setLast ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setError("");
        }, 3000);
    }, [error]);

    const handleChangeFirst = event => {
        setFirst(event.target.value)
    };

    const handleChangeLast = event => {
        setLast(event.target.value);
    };

    const handleChangeUsername = event => {
        setUsername(event.target.value);
    };

    const handleChangeEmail = event => {
        setEmail(event.target.value);
    };

    const handleChangePassword = event => {
        setPassword(event.target.value);
    };

    const submit = () => {
        // TODO: replace me with an authentication call to the backend
        console.log(username, password);
        setName(username);
    };

    const signup = () => {
          
        let body = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
 
        APIPost("userinfo", body);
 
        setName(username);
    };

    const toggleRegister = () => {
        setRegister(!register);
    }

    if (!register) {
        return (
            <>
                <div id="loginbox">
                    <input type="text" value={username} onChange={handleChangeUsername} placeholder="username"/><br/>
                    <input type="password" value={password} onChange={handleChangePassword} placeholder="password"/><br/>
                    <button class="button button1" onClick={submit}>Login</button>
                    <p>
                        New User? Sign up&nbsp;
                        <span onClick={toggleRegister}>here</span>
                    </p>                 
                </div>
            </>
        );
    };

    return (
        <>
            <div id="loginbox">
                <input type="text" value={firstName} onChange={handleChangeFirst} placeholder="first name"/><br/>
                <input type="text" value={lastName} onChange={handleChangeLast} placeholder="last name"/><br/>
                <input type="text" value={username} onChange={handleChangeUsername} placeholder="username"/><br/>
                <input type="text" value={email} onChange={handleChangeEmail} placeholder="email"/><br/>
                <input type="password" value={password} onChange={handleChangePassword} placeholder="password"/><br/>
                
                <button class="button button2" onClick={signup}>Sign up</button>
                <p>
                    Already have an account? Login&nbsp;
                    <span onClick={toggleRegister}>here</span>
                </p>

                {(error !== "") &&
                    <div>
                        <p className='signupError'>
                            {error}
                        </p>
                    </div>
                }

            </div>
        </>
    );
    
}