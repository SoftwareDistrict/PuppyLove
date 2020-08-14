import React from 'react';

function Friend({ id, dog_name, breed, weight, age, fixed, description, image, id_user }) {
  return (
    <div class='profileContainer'>
      <h1>{`${dog_name}'s Profile Information`}</h1>
      <div class='profileInfo'>{`Name: ${dog_name}`}</div>
      <div class='profileInfo'>{`Age: ${age}`}</div>
      <div class='profileInfo'>{`Weight: ${weight}`}</div>
      <div class='profileInfo'>{`Breed: ${breed}`}</div>
      <div class='profileInfo'>{`Fixed: ${fixed}`}</div>
      <div class='profileInfo'>{`Description: ${description}`}</div>
      <div class='profileInfo'>Photo: <img src={image}></img></div>
    </div>
  );
};

export default Friend;