import React from 'react';
import { Link } from 'react-router-dom';

function Logout() {

  const onConfirm = () => {
    const restart = confirm('If you press OK, this should redirect to the same page, only with Login as the header.');
    if (restart) {
      return;
    }
  };

  const onCancel = () => {
    const cancel = confirm('This doesn\'t need an alert, but when you press cancel it should redirect to the "/" or the previos page the user was on');
    if (cancel) {
      return;
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input class='input-field' type='text' style={{ width: '500px', height: '35px', fontSize: '16px', marginLeft: '340px', marginTop: '10px', marginBottom: '10px', paddingLeft: '10px' }}></input>
      <div id='log-butt' style={{marginBottom: '100px'}}>
        <Link to='/logout' id='login' onClick={onConfirm}>Login</Link>
        <Link to='/' id='cancel' onClick={onCancel}>Cancel</Link>
      </div>
    </div>
  );
};

export default Logout;