import React from 'react'
import'./HeroSection.css';
import { Button } from "./Button";
import { Link } from 'react-router-dom';
import Video from './assets/video.mp4';



export default function HeroSection() {
  return (
    
     <div className="hero-container"> 
        <video src= {Video} autoPlay loop muted />   
          
          <h1>"A party without cake is just a meeting."</h1>
          <p>— Happy cake. Baked just right.</p>
          <div className="hero-btns">
          <Link to='./Contact' className='btn-mobile'>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Contact
            </Button>
          </Link>
            
            
          </div>
        
      
    </div>

   
  );
}