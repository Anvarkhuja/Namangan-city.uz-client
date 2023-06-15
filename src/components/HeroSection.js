import React from 'react';

// import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>NAMANGAN-CITY</h1>
      <p>The city of The flowers</p>
      <div className='hero-btns'>
        <Button
        
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ABOUT CITY
        </Button>
        {/* <Button
         className='btns'
         buttonStyle='btn--primary'
         buttonSize='btn--large'
        >
          WATCH CITY <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
