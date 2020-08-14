import React from 'react';

function DogProfile({ open }) {
  return (
    <div>
      <button id='settings' onClick={open}>Menu</button>
      <h2>My Dog's Profile</h2>
    </div>
  );
};

export default DogProfile;