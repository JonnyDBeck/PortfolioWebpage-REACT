import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className='Footer'>
        <FontAwesomeIcon icon={faLinkedin} 
        onClick={() => window.location.href = 'https://www.linkedin.com/in/jonathandbeck'}/>
        <FontAwesomeIcon icon={faGithub}
        onClick={() => window.location.href = 'https://github.com/JonnyDBeck'} />
    </div>
  );
}