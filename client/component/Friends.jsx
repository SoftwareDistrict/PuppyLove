import React from 'react';

function Friends({ open }) {
  return (
    <div>
      <button id='settings' onClick={open}>Menu</button>
      <h2>Friends List</h2>
    </div>
  );
};

export default Friends;