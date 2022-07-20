import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <>
      <div style={{marginTop: '100px'}}>
        <div id="logpage">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;