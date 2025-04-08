import React from "react";
import '../landingPage/landing.css'
import Header from "../Header/header";
import Button from "../Button/Button";
import Image from '../../assests/images/Image.png';

function Landing() {
    return (
    <>
    <div className="wrapper">
   <div className="header">
    <Header />
   </div>
   <div className="hero-section">
<div className="text-container">
  <h2 className="heading">Get More Done with whitespace</h2>
  <p className="text">Project management software that enables your teams to collaborate, plan, anaylze and manage everyday tasks</p>
  <div className="btn-1">
    <Button />
   </div>
</div>
<div className="image-container">
<img src={Image} alt="myimage"/>
</div>
   </div>
  
   </div>
    </>
    );
  }
  
  export default Landing;