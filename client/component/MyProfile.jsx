import React from 'react';

function MyProfile({ open }) {
  return (
    <div>
      <button id='settings' onClick={open}>Menu</button>
      <h2>My Profile</h2>
    </div>
  );
};

export default MyProfile;