import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = ({setName}) => {
  return (
    <>
      <div style={{marginTop: '100px'}}>
        <div id="logpage">
          <LoginForm setName={setName}/>
        </div>
      </div>
    </>
  );
};

export default Login;