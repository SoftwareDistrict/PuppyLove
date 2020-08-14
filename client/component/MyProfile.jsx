import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Friend from './Friend.jsx';


function MyProfile({ usersInfo, setDog, users, userDogs }) {
  console.log(setDog, 6);
  console.log(users, 7);
  console.log(8);
  var username = null;
  var email = null;
  var cell = null;
  var homeTown = null;
  //USER EDIT STATES
  console.log(users);
  console.log(111);

  let [usernameState, usernameChange] = useState(null);
  let [emailState, emailChange] = useState(null);
  let [cellState, cellChange] = useState(null);
  let [hometownState, hometownChange] = useState(null);
  let [addDogState, addDogChange] = useState(null);


  let [editUserbuttonClicked, editChange] = useState(false);
  let editDiv = <div id="sc-edprofile">
    <h1>Edit Profile</h1>
    <div class="sc-container">
      <input onChange={(event) => { usernameChange(event.target.value) }} type="text" placeholder="Username" />
      <input onChange={(event) => { emailChange(event.target.value) }} type="text" placeholder="Email Address" />
      <input onChange={(event) => { cellChange(event.target.value) }} type="text" placeholder="Cell Phone Number" />
      <input onChange={(event) => { latitudeChange(event.target.value) }} type="text" placeholder="Hometown" />
      <input class="favorite styled"
        type="button"
        value="Submit"
        onClick={() => {
          console.group('editinfo submit clicked')
          postEditInfo({
            username: usernameState,
            email: emailState,
            cell: cellState,
            hometown: hometownState
          });

        }} />
    </div>
  </div>

  //

  let addDogDiv = <div id="sc-edprofile">
    <h1>Add A Dog</h1>
    <div class="sc-container">
      <input onChange={(event) => { dogNameChange(event.target.value) }} type="text" placeholder="Name" />
      <input onChange={(event) => { dogBreedChange(event.target.value) }} type="text" placeholder="Breed" />
      <input onChange={(event) => { dogAgeChange(event.target.value) }} type="text" placeholder="Age" />
      <input onChange={(event) => { dogWeightChange(event.target.value) }} type="text" placeholder="Weight" />
      <input onChange={(event) => { dogFixedChange(event.target.value) }} type="text" placeholder="Fixed" />
      <input onChange={(event) => { dogDescriptionChange(event.target.value) }} type="text" placeholder="Description" />
      <input onChange={(event) => { dogImageUrlChange(event.target.value) }} type="text" placeholder="Image URL" />
      <input class="favorite styled"
        type="button"
        value="Submit"
        onClick={() => {
          console.group('editinfo submit clicked')
          postDogInfo({
            username: usernameState,
            email: emailState,
            cell: cellState,
            hometown: hometownState
          });

        }} />
    </div>
  </div>



  //ADD DOG STATE
  let [dogNameState, dogNameChange] = useState(null);
  let [dogBreedState, dogBreedChange] = useState(null);
  let [dogAgeState, dogAgeChange] = useState(null);
  let [dogWeightState, dogWeightChange] = useState(null);
  let [dogFixedState, dogFixedChange] = useState(null);
  let [dogDecriptionState, dogDescriptionChange] = useState(null);
  let [dogImageUrl, dogImageUrlChange] = useState(null);
  //======================================================================================================
  //VARIABLES
  if (users) {
    var user = users[0];
    console.log(user);


    //UsersInfo props
    console.log(user.username, 35)
    username = user.name;
    email = user.email;
    cell = user.cell;
    homeTown = 'ATL';
    //  const { cell, homeTownn, email } = user;
    if (username) {
      console.log(username, 34);

      let homeTown = 'New Orleans'
      console.log(usersInfo);

      //Conditional render of edit div based if this state is toggled
      // let [editUserbuttonClicked, editChange] = useState(false);

      //FUNCTIONS
      const postEditInfo = (obj) => {
        console.log('axios request here');
      };
      const postDogInfo = (obj) => {
        console.log('axios request here');
      };

      //Div for editing the profile
      let editDiv = <div id="sc-edprofile">
        <h1>Edit Profile</h1>
        <div class="sc-container">
          <input onChange={(event) => { usernameChange(event.target.value) }} type="text" placeholder="Username" />
          <input onChange={(event) => { emailChange(event.target.value) }} type="text" placeholder="Email Address" />
          <input onChange={(event) => { cellChange(event.target.value) }} type="text" placeholder="Cell Phone Number" />
          <input onChange={(event) => { latitudeChange(event.target.value) }} type="text" placeholder="Hometown" />
          <input class="favorite styled"
            type="button"
            value="Submit"
            onClick={() => {
              console.group('editinfo submit clicked')
              postEditInfo({
                username: usernameState,
                email: emailState,
                cell: cellState,
                hometown: hometownState
              });

            }} />
        </div>
      </div>


      //Div for adding dog profile

      let addDogDiv = <div id="sc-edprofile">
        <h1>Add A Dog</h1>
        <div class="sc-container">
          <input onChange={(event) => { dogNameChange(event.target.value) }} type="text" placeholder="Name" />
          <input onChange={(event) => { dogBreedChange(event.target.value) }} type="text" placeholder="Breed" />
          <input onChange={(event) => { dogAgeChange(event.target.value) }} type="text" placeholder="Age" />
          <input onChange={(event) => { dogWeightChange(event.target.value) }} type="text" placeholder="Weight" />
          <input onChange={(event) => { dogFixedChange(event.target.value) }} type="text" placeholder="Fixed" />
          <input onChange={(event) => { dogDescriptionChange(event.target.value) }} type="text" placeholder="Description" />
          <input onChange={(event) => { dogImageUrlChange(event.target.value) }} type="text" placeholder="Image URL" />
          <input class="favorite styled"
            type="button"
            value="Submit"
            onClick={() => {
              console.group('editinfo submit clicked')
              postDogInfo({
                username: usernameState,
                email: emailState,
                cell: cellState,
                hometown: hometownState
              });

            }} />
        </div>
      </div>

    }
  }


  if (users === '') {
    return (
      <div>
        <div>User is not signed in</div>
        <button onClick={() => {

        }}>Test!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</button>
      </div>
    )
  } if (user) {

    return (
      <div id='profilePage'>


        <div id='userEdit'>
          <button onClick={() => {
            console.log(userDogs);
            editChange(!editUserbuttonClicked)
          }}>Edit Profile</button>
        </div>



        <div class='profileContainer'>
          <h1>{`${username}'s Profile Inforamtion`}</h1>
          <div class='profileInfo'>{`Username: ${username}`}</div>
          <div class='profileInfo'>{`Email: ${email}`}</div>
          <div class='profileInfo'>{`Cell Phone Number: ${cell}`}</div>
          <div class='profileInfo'>{`Hometown: ${homeTown}`}</div>

        </div>



        <div id='divEditClicked'>
          {editUserbuttonClicked ? editDiv : <div></div>}
        </div>

        <button onClick={() => { addDogChange(!addDogState) }}>Add Dog</button>


        <div id='divAddDogClicked'>
          {addDogState ? addDogDiv : <div></div>}
        </div>


        {/* LIST OF OWNERS DOGS  */}
        <h1>{`${username}'s dogs`}</h1>

        <div>
          {userDogs.map((dog) => {
            return <Friends id={dog.id} dog_name={dog_name} breed={dog.breed} weight={dog.weight} age={dog.age} fixed={dog.fixed} description={dog.description} image={dog.image} id_user={dog.id_user} />
          })}
        </div>

        {/* return <div className="userDogDiv">
          <h2>{dog.name}</h2>
          <img src={dog.image}></img>
          <Link to="/dogProfile"><button onClick={() => {
            setDog(dog);
          }}>{`Go to ${dog.name}'s profile!!!?`}</button></Link>

      })} */}
      </div>
    );





  }

};

export default MyProfile;