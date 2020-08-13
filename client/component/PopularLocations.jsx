import React from 'react';

function PopularLocations({ open }) {
  return (
    <div>
      <button id='settings' onClick={open}>Menu</button>
      <h2>Popular Locations</h2>
    </div>
  );
};

export default PopularLocations;