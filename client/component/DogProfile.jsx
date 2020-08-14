// import React from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function DogProfile({ dog, setDog }) {


  const { id, name, breed, weight, age, fixed, description, image, id_user, friendsArr } = dog

  const submit = () => { console.log('submitted') };
  const func = () => { console.log(dog) }


//Varaible for a div that contains dogs info
  let dogInfo = <div class='profileContainer'>
    <h1>{`${name}'s Profile Information`}</h1>
    <div class='profileInfo'>{`Name: ${name}`}</div>
    <div class='profileInfo'>{`Age: ${age}`}</div>
    <div class='profileInfo'>{`Weight: ${weight}`}</div>
    <div class='profileInfo'>{`Breed: ${age}`}</div>
    <div class='profileInfo'>{`Fixed: ${fixed}`}</div>
    <div class='profileInfo'>{`Description: ${description}`}</div>
    <div class='profileInfo'>Photo: <img src={image}></img></div>


  </div>

  return (
    <div>
      {/* Dogs info div */}
      {dogInfo}
      {/* Dogs friends list */}
      {friendsArr ? <h2 class='profileContainer'>{`${name}'s Friends`}</h2> : <div></div>}
      <div class='profileContainer'>
        {(friendsArr) ?
          <div>
            {friendsArr.map((friend) => {
              return <div>
                <p><label>Name: </label>{friend.name}</p>
                <div><img src={friend.image}></img></div>
                <Link to="/dogProfile"><button onClick={() => {
                  setDog(friend);
                }}>{`Go to ${friend.name}'s profile!!!?`}</button></Link>
              </div>
            })}
          </div> : <div></div>
        }

      </div>
    </div>
  );
};

export default DogProfile;









