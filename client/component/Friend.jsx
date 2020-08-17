import React from 'react';

function Friend({ match, data }) {

  const dogsProfile = data.find(dog => dog.id == match.params.id);

  return (
    <div class='profileContainer'>
      <div>{
        dogsProfile ? (
          <div>
            <h1>{`${dogsProfile.dog_name}'s Profile`}</h1>
            <img src={dogsProfile.image} />
            <div class='profileInfo'>{`Name: ${dogsProfile.dog_name}`}</div>
            <div class='profileInfo'>{`Age: ${dogsProfile.age} years`}</div>
            <div class='profileInfo'>{`Weight: ${dogsProfile.weight} lbs`}</div>
            <div class='profileInfo'>{`Breed: ${dogsProfile.breed}`}</div>
            <div class='profileInfo'>{`Fixed: ${dogsProfile.fixed}`}</div>
            <div class='profileInfo'>{`Description: ${dogsProfile.description}`}</div>
          </div>
        )
        : (<div>This is not supposed to be here</div>)
      }</div>
    </div>
  );
};

export default Friend;