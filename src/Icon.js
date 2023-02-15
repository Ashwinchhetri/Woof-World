import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

function Icon() {
    const handleScroll = () => {
      const el = document.querySelector('.map');
      el.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (
      <span>
        <FontAwesomeIcon icon={faMapLocationDot} className="my-icon" onClick={handleScroll} title="Want to know about dogs breed in different countries? Click Me! " />
      </span>
    );
  }

export default Icon;