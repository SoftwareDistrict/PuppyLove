import React from 'react';

function FavLocations({ open }) {
  return (
    <div>
      <button id='settings' onClick={open}>Menu</button>
      <h2>My Favorite Locations</h2>
    </div>
  );
};

export default FavLocations;