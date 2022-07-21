import {useState} from "react";
import { APIPost } from "../utils/api";

export default function LoginForm(){
    
    const [register, setRegister] = useState(false); 
    const [firstName, updateFirst] = useState("");
    const [lastName, updateLast] = useState("");
    const [username, updateUsername] = useState("");
    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");

    const handleChangeFirst = event => {
        updateFirst(event.target.value)
    };

    const handleChangeLast = event => {
        updateLast(event.target.value);
    };

    const handleChangeUsername = event => {
        updateUsername(event.target.value);
    };

    const handleChangeEmail = event => {
        updateEmail(event.target.value);
    };

    const handleChangePassword = event => {
        updatePassword(event.target.value);
    };

    const submit = () => {
        // TODO: replace me with an authentication call to the backend
        console.log(username, password);
    };

    const signup = () => {
        let body = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        APIPost("userinfo", body);
    };

    const toggleRegister = () => {
        setRegister(!register);
    }

    if (register) {
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
            </div>
        </>
    );
    
}