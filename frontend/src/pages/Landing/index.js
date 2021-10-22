import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button'
import './landing.css'
import "../../components/Footer/index.js"
import "../../components/Header/index.js"
import logo from "./easy-apply_logo.jpg"
import { Link } from 'react-router-dom';
import testimonial1 from "./testimonial1.jpg"
import testimonial2 from "./testimonial2.jpg"
import testimonial3 from "./testimonial3.jpg"

const landingPage = (props) => {
    return (<div id="root">
        <header>
            <img src={logo}></img>
        </header>
        <div id="topBanner">
            <div id="jobSeekerQuestion">
                <h3>Looking for a job? Look no further...</h3>
            </div>
            <div id ="employerQuestion">
                <h3>Tired of sifting through resumes? Then don't!</h3>
            </div>
        </div>
        <div id="middleBanner">
            <div id="easyApplyPromotion">
                <h4>easyApply: The all-in-one employment platform!</h4>
            </div>
            <div id="easyApplyFeatures">
                <h4>easyApply...</h4>
                <p>...instantly matches talent to open postings!</p>
                <p>...schedules and hosts interviews with the click of a button!</p>
                <p>...Allows you to differentiate yourself with a custom "elevator pitch"</p>
            </div>
            <div id="easyApplySignUp">
                <h4>Interested?</h4>
                <Link to="/signup"><Button>Sign up now!</Button></Link>
                <Link to="/login"><Button>Already have an account?</Button></Link>
            </div>
        </div>
        <div id ="bottomBanner">
            <div id="testimonials">
                <h4>Don't take our word for it, see what your peers say!</h4>
            </div>
            <div id="testimonial1">
                <p>easyApply is great!</p>
                <img src={testimonial1}></img>
            </div>
            <div id="testimonial2">
                <p>I found a job so easily!</p>
                <img src={testimonial2}></img>
            </div>
            <div id="testimonial3">
                <p>It usually takes weeks to find the right candidate, I found them in 3 days!</p>
                <img src={testimonial3}></img>
            </div> 
        </div>
    </div>)
}

export default landingPage;