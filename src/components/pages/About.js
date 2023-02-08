import React from 'react';
import profilePic from '../../images/ProfilePic.jpg'

export default function About() {
  return (
    <div className='theSection'>
      <h1 className='AboutHead'>About Me</h1>
      <img
      className='AboutPic'
        src={profilePic}
        alt='This Is Me'></img>
      <p className='AboutBody'>
        Hello! My Name is Jonathan Beck. I am a Software developer that has experience 
        in both front-end and back-end programming.
      </p>
    </div>
  );
}