import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { APIPost, APIGet } from "../utils/api";

export default function LoginForm({setName}){
    let navigate = useNavigate();

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

    const submit = event => {
        event.preventDefault();

        APIGet('userinfo/username/' + username)
            .then(response => {
                if (response.data.password === password) {
                    setName(username);
                    navigate("/", { replace: true });
                }
                else {
                    setError("Error: Incorrect username/password");
                } 
            })
            .catch(err => {
                if (err.response.data.status === 500) {
                    setError("Error: Incorrect username/password");
                }
                else {
                    setError("Login Error");
                }
            });


        setName(username);
    };

    const signup = event => {
        event.preventDefault();

        let body = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
 
        axios.post('userinfo', body)
            .then(response => {
                if(response.status === 200) {
                    setName(username);
                    navigate("/", { replace: true });
                }
                else {
                    setError("Error: Account not created!");  
                }
            })
            .catch(err  => {
                if (err.response.data.status === 500) {
                    setError("Error: Username or Email Already Exists!");
                }
            }); 
    
        
        // let result = APIPost('userinfo', body);

        // if(result === undefined) {
        //     console.log("RESULT1 = ", result);
        //     setTimeout(() => {
        //         console.log("RESULT timeout = ", result);
        //     }, 10000);
        // }    
        // if (result === 200) {
        //     setError("Error: Account not created!");
        // }
        // else if (result === 500) {
        //     setError("Error: Username or Email Already Exists!");
        // }
        // else {
            
        // }
        
    };

    const toggleRegister = () => {
        setRegister(!register);
    };

    if (!register) {
        return (
            <>
                <div id="loginbox">
                    <form>
                        <input type="text" value={username} onChange={handleChangeUsername} placeholder="username"/><br/>
                        <input type="password" value={password} onChange={handleChangePassword} placeholder="password"/><br/>
                        <button class="button button1" onClick={submit}>Login</button>
                        <p>
                            New User? Sign up&nbsp;
                            <span onClick={toggleRegister}>here</span>
                        </p> 

                        {(error !== "") &&
                            <div>
                                <p className='signupError'>
                                    {error}
                                </p>
                            </div>
                        }
                    </form>                
                </div>
            </>
        );
    };

    return (
        <>
            <div id="loginbox">
                <form>
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
                </form>
            </div>
        </>
    );
    
}