import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

// image, name, introduciton, age, 

function profile() {
    const profile = (
        <div id="root">
            <div id="profileHeader">
                <img src="./im.jpg" width="200"></img>
                <Button>Edit</Button>
            </div>
            
            <div id="name">
                <h2>name here</h2>
            </div>
            <div id="age">
                <h3>age here</h3>
            </div>
            <div id="introduction">
                <p>
                </p>
            </div>
        </div>
    );
    ReactDOM.render(landingPage, getElementByID('root'));
}