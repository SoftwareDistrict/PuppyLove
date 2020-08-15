import React, { useEffect } from 'react';

function Friend({ match }) {
  // useEffect(() => {
  //   axios.get('/thisFriend')

  // });

  return (
    <div class='profileContainer'>
      <div class='profileInfo' style={{ backgroundImage: `url('${image}')` }}>{dog_name}</div>
      <button id='login' type='button' onClick={unfriend}>Unfriend</button>
    </div>
  );
};

export default Friend;