import {useState} from "react";

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

    }


    return <>
    <input type="text" value={username} onChange={handleChangeUsername} placeholder="username"/><br/>
    <input type="password" value={password} onChange={handleChangePassword} placeholder="password"/><br/>
    <button onClick={submit}>login</button> 
    <button onClick={signup}>Sign up</button>
    </>
}