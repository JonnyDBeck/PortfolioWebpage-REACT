import React from 'react';

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="Header">
      <h1  className="Title">Jonathan Beck</h1>
      <div className='NavBar'>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
        <h2 className='NavItem'>About Me</h2></a>

        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
        <h2 className='NavItem'>Portfolio</h2></a>

        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
        <h2 className='NavItem'>Contact Me</h2></a>

        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
        <h2 className='NavItem'>Resume</h2></a>

      </div>
    </div>
  );
};

export default Header;
