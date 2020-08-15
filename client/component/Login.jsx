import React from 'react';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <div id='log-butt' style={{marginBottom: '1000px'}}>
        <a id='signup' href='/auth/google'>Sign In With Google</a>
      </div>
    </div>
  );
};

export default Login;
