import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

function SignUp({ sessUser, sessDog }) {
    const [ username, setUsername ] = useState('');
    const [ cell, setCell ] = useState('');
    const [ hometown, setHometown ] = useState('');
    const [ dogName, setDogName ] = useState('');
    const [ weight, setWeight ] = useState('');
    const [ age, setAge ] = useState('');
    const [ breed, setBreed ] = useState('');
    const [ desc, setDesc ] = useState('');
    const [ image, setImage ] = useState('');
    const [ fixed, setFixed ] = useState('');

    const addUserInfo = () => {
        axios.post('/users', {
            username: username,
            cell: cell,
            home_town: hometown
        })
        .then(() => console.log('successful post for user info'))
        .catch((err) => console.log('unsuccesful post request for user info: ', err));
    };

    const addDogInfo = () => {
        axios.post('/dogs', {
            dog_name: dogName,
            breed: breed,
            weight: weight,
            age: age,
            fixed: fixed,
            description: desc,
            image: image,
            id_user: sessUser.id,
        })
        .then(() => console.log('successful post for dog info'))
        .catch((err) => console.log('unsuccesful post request for dog info: ', err));
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <div id="sign-form">
                <h3>Create Account</h3>
                    <div class="sc-container">
                        <input classname='create' onChange={(event) => setUsername(event.target.value) } type="text" placeholder="Username" /><br /><br />
                        <input classname='create' onChange={(event) => setCell(event.target.value) } type="text" placeholder="Cell Phone Number" /><br /><br />
                        <input classname='create' onChange={(event) => setHometown(event.target.value) } type="text" placeholder="Hometown" /><br /><br />
                    </div>
                <h3>Add Your Dog</h3>
                <div class="signup-form">
                    <input classname='create' onChange={(event) => setDogName(event.target.value) } type="text" placeholder="Name" /><br /><br />
                    <input classname='create' onChange={(event) => setBreed(event.target.value) } type="text" placeholder="Breed" /><br /><br />
                    <input classname='create' onChange={(event) => setAge(event.target.value) } type="text" placeholder="Age" /><br /><br />
                    <input classname='create' onChange={(event) => setWeight(event.target.value) } type="text" placeholder="Weight" /><br /><br />
                    <input classname='create' onChange={(event) => {
                        if (event.target.value === "true") {
                            setFixed(0);
                        } else {
                            setFixed(1);
                        }
                    }} type="text" placeholder="Fixed" /><br /><br />
                    <input classname='create' onChange={(event) => setDesc(event.target.value) } type="text" placeholder="Description" /><br /><br />
                    <input classname='create' onChange={(event) => setImage(event.target.value) } type="text" placeholder="Image URL" /><br /><br />
                    <Link to='/' id="dude" onClick={() => {
                        addUserInfo();
                        addDogInfo();
                    }}>Create</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
