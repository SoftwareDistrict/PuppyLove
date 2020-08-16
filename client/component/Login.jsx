import React from 'react';

function Login() {
  return (
    <div style={{ height: '90vh', width: '90vw' }}>
      <h2>Login</h2>
      <div id='log-butt'>
        <a id='signup' href='/auth/google'>Sign In With Google</a>
      </div>
    </div>
  );
};

export default Login;
