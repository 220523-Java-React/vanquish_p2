import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <>
      <div style={{marginTop: '100px'}}>
        <h1 style={{fontSize: '200px'}}>
          Login
        </h1>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;