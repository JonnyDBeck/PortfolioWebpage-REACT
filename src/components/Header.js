import React from 'react';

// Issue item accepts a single issue as a prop
// This component is solely responsible for displaying the specific information for a given issue
const Header = ({ issue }) => {
  return (
    <div className="Header">
      <h1  className="Title">Jonathan Beck</h1>
      <div className='NavBar'>
        <h2 className='NavItem'>About Me</h2>
        <h2 className='NavItem'>Portfolio</h2>
        <h2 className='NavItem'>Contact Me</h2>
        <h2 className='NavItem'>Resume</h2>
      </div>
    </div>
  );
};

export default Header;
