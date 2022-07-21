import {useState} from "react";
import { APIPost } from "../utils/api";

export default function LoginForm(){
    
    let [username, updateUsername] = useState("");
    let [password, updatePassword] = useState("");

    
    function handleChangeUsername(event){
        updateUsername(event.target.value)
    }

    function handleChangePassword(event){
        updatePassword(event.target.value);
    }

    function submit(){
        // TODO: replace me with an authentication call to the backend
        console.log(username, password)
    }

    function signup(){
        let body = {
            username: username,
            firstName: 'Test',
            lastName: 'User',
            email: 'Test@User.com',
            password: 'pass1234'
        }
        APIPost("userinfo", body);
    }


    return <>
    <div id="loginbox">
    <input type="text" value={username} onChange={handleChangeUsername} placeholder="username"/><br/>
    <input type="password" value={password} onChange={handleChangePassword} placeholder="password"/><br/>
    <button class="button button1" onClick={submit}>Login</button> 
    <button class="button button2" onClick={signup}>Sign up</button>
    </div>
    </>
}