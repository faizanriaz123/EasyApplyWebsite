import React, { useState, useEffect } from "react";
import api from "../../api"; 
import NavBar from '../../Components/NavBar';
import "./index.css";

import {
    Grid,
    Paper,
    Typography,
    IconButton,
    MuiThemeProvider,
    makeStyles,
    TextField,
    Button,
    Avatar
  } from "@material-ui/core";

  import 'antd/dist/antd.css';

  import { Input} from "antd"; 


const ProfilePage = () => {
    const [first, setFirst] = useState(""); 
    const [last, setLast] = useState(""); 
    const [info, setInfo] = useState([]); 

    useEffect(() => {
        loadData();
    },[])

    const loadData = async() => {
        const response = await api.get("/auth/profile");
        const myData2 = response['data'];       
        console.log(response);
        console.log(myData2);
        const firstname= myData2['firstName'];
        const lastname = myData2['lastName'];
        const info = setInfo(myData2); 
        setFirst(firstname);
        setLast(lastname);
    }

    const gender = info['gender']; 
    const birth = info['birthDate'];
    const city = info['city'];
    const country = info['country'];

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden',backgroundColor: '#2b2b2b', height: "100vh" }}>
        <NavBar/>
            <Grid>
                <Avatar alt="" src="/static/images/avatar/1.jpg" style={{ border: "2px solid", height: "200px", width: "200px" }}/>
            </Grid>    
                <h1 className="firstName" style={{color: "black", left: "5px"}}> {first} </h1>
                <h1 className="lastName" style={{color: "black", left: "5px"}}> {last} </h1>
                <h1 className="gender" style={{color: "black", left: "5px"}}> {gender} </h1>
                <h1 className="birth" style={{color: "black", left: "5px"}}> Birthday: {birth} </h1>
                <h1 className="birth" style={{color: "black", left: "5px"}}> Lives in: {city}, {country} </h1>


        </Paper>

    );
};

export default ProfilePage