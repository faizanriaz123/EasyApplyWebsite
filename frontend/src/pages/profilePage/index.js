import * as React from 'react';
import NavBar from '../../Components/NavBar';
import Button from '@mui/material/Button';
import "./profilePage.css";
import image from "./image.jpg";
import Box from "@mui/material/Box";

const profile = (props) => {
    return (
    <div id="root">
    <NavBar/>
    <Box>

    </Box>
        <div id="profileHeader">
            <div>
                <img src={image} width="200"></img>
            </div>    
            <div>
                <Button>Edit</Button>
            </div>
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
    )

}

export default profile;