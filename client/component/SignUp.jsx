import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function SignUp() {
    // User states
    const [username, setUsername] = useState(null);
    const [cell, setCell] = useState(null);
    const [hometown, setHometown] = useState(null);

    //Dog States
    const [dogName, setDogName] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [breed, setBreed] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');
    const [fixed, setFixed] = useState('');

    const postUserInfo = () => {
        axios.post('/addUserInfo', {
            username: username,
            cell: cell,
            home_town: hometown
        }).then(() => {
            console.log('successful post for user info')
        }).catch(() => {
            console.log('unsuccesful post request for user info')
        });
    };

    let editDiv = <div id="sc-edprofile">
        <h1>Edit Profile</h1>
        <div class="sc-container">
            <input onChange={(event) => { setUsername(event.target.value) }} type="text" placeholder="Username" /><br /><br />
            <input onChange={(event) => { setCell(event.target.value) }} type="text" placeholder="Cell Phone Number" /><br /><br />
            <input onChange={(event) => { setHometown(event.target.value) }} type="text" placeholder="Hometown" /><br /><br />
            <input class="favorite styled"
                type="button"
                value="Submit"
                onClick={() => {
                    console.log('editinfo submit clicked');
                    postUserInfo();
                }} />
        </div>
    </div>



    let addDogDiv = <div id="sc-edprofile">
        <h1>Add A Dog</h1>
        <div class="sc-container">
            <input onChange={(event) => { setDogName(event.target.value) }} type="text" placeholder="Name" /><br /><br />
            <input onChange={(event) => { setBreed(event.target.value) }} type="text" placeholder="Breed" /><br /><br />
            <input onChange={(event) => { setAge(event.target.value) }} type="text" placeholder="Age" /><br /><br />
            <input onChange={(event) => { setWeight(event.target.value) }} type="text" placeholder="Weight" /><br /><br />
            <input onChange={(event) => { setFixed(event.target.value) }} type="text" placeholder="Fixed" /><br /><br />
            <input onChange={(event) => { setDesc(event.target.value) }} type="text" placeholder="Description" /><br /><br />
            <input onChange={(event) => { setImage(event.target.value) }} type="text" placeholder="Image URL" /><br /><br />
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





    return (
        <div>
            <h1>Signup page!</h1>
            {editDiv}
            <br />
            {addDogDiv}
        </div>
    );
};

export default SignUp;