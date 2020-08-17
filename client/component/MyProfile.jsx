import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function MyProfile({ sessUser, sessDog, open }) {
  const { id, dog_name, breed, weight, age, fixed, description, image, id_user } = sessDog;
  const { username, cell, home_town, email } = sessUser
  const updateUserAndDogInfo = (obj) => {
    axios.post('./updateUserAndDog', obj)
    .then((result) => {
      console.log('success')
    }).catch((err) => console.log('fuuuuuuuck: ', err));
  }
  const [editUserbuttonClicked, editChange] = useState(false);
  //user edit states
  const [usernameEdit, setUsername] = useState('');
  const [cellEdit, setCell] = useState('');
  const [hometownEdit, setHometown] = useState('');
  //dog edit states
  const [dogNameEdit, setDogName] = useState('');
  const [weightEdit, setWeight] = useState('');
  const [ageEdit, setAge] = useState('');
  const [breedEdit, setBreed] = useState('');
  const [descEdit, setDesc] = useState('');
  const [imageEdit, setImage] = useState('');
  const onEvent = (event, setFunc, val) => {
    if (event.target.value === '' || event.target.value === undefined) {
      setFunc(val);
    } else {
      setFunc(event.target.value);
    }
  }
  //Form to submit edit for User and Dog info 
  let bothDiv = <div id="sc-edprofile">
    <div>Edit User's Info</div>
    <div class="sc-container">
      <label>Username:</label><br /><input onChange={(event) => onEvent(event, setUsername, username)} type="text" placeholder={username} /><br />
      <label>Cell:</label><br /><input onChange={(event) => onEvent(event, setCell, cell)} type="text" placeholder={cell} /><br />
      <label>Hometown:</label><br /><input onChange={(event) => onEvent(event, setHometown, home_town)} type="text" placeholder={home_town} /><br /><br />
      <div>Edit Dog's Info</div>
      <label>Name:</label><br /><input onChange={(event) => onEvent(event, setDogName, dog_name)} type="text" placeholder={dog_name} /><br />
      <label>Weight:</label><br /><input onChange={(event) => onEvent(event, setWeight, weight)} type="text" placeholder={weight} /><br />
      <label>Age:</label><br /><input onChange={(event) => onEvent(event, setAge, age)} type="text" placeholder={age} /><br />
      <label>Breed:</label><br /><input onChange={(event) => onEvent(event, setBreed, breed)} type="text" placeholder={breed} /><br />
      <label>Description:</label><br /><input onChange={(event) => onEvent(event, setDesc, description)} type="text" placeholder={description} /><br />
      <label>Image Url:</label><br /><input onChange={(event) => onEvent(event, setImage, image)} type="text" placeholder='Image Url' /><br />
      <Link class="favorite styled"
        to="/myprofile"
        onClick={() => {
          editChange(false);
          console.group('editinfo submit clicked')
          updateUserAndDogInfo({
            user: {
              username: usernameEdit,
              cell: cellEdit,
              hometown: hometownEdit,
            },
            dog: {
              dog_name: dogNameEdit,
              weight: weightEdit,
              breed: breedEdit,
              age: ageEdit,
              description: descEdit,
              fixed: 0,
              image: imageEdit,
            }
          });
        }}>Submit</Link>
    </div>
  </div>
  if (sessUser) {
    return (
      <div>
        <div id='divEditClicked'>
          <button id='settings' onClick={open}>Menu</button>
          <div class='profileContainer'>
            <div>{`${username}'s Profile Inforamtion`}</div>
            <div class='profileInfo'>{`Username: ${username}`}</div>
            <div class='profileInfo'>{`Email: ${email}`}</div>
            <div class='profileInfo'>{`Cell Phone Number: ${cell}`}</div>
            <div class='profileInfo'>{`Hometown: ${home_town}`}</div>
          </div>
          <button onClick={() => {
            console.log('button clicked!');
            editChange(!editUserbuttonClicked)
          }}>Edit Profile</button>
          {editUserbuttonClicked ? bothDiv : <div></div>}
        </div>
        <div id='dogContainer'>
          <div>{`${username}'s Dog`}</div>
          <div class='profileInfo'>{`Name: ${dog_name}`}</div>
          <div class='profileInfo'><img src={image} alt="1" /></div><br />
          <Link to={`/dogprofile/${id}`}> {`Go to ${dog_name}'s Profile `}</Link>
        </div>
      </div>
    )
  } else {
    <div>
      <button id='settings' onClick={open}>Menu</button>
      User is not signed in
    </div>
  }
};
export default MyProfile;