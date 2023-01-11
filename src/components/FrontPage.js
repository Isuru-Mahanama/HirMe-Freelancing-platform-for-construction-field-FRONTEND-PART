import React from 'react';
import "../App.css";
import Button from './Button';
import "./btn.css";
import './FrontPage.css';

function Frontpage() {
  return (
    <div className='hero-container '>
        <video src='/videos/video.mp4' autoPlay loop muted />
         <h1>HERE IS YOUR DREAM</h1>
         <p>What are you waiting for?</p>
         <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
    
  )
}

export default Frontpage