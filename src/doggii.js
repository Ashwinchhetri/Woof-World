import React, { useState, useEffect } from 'react';
import './doggii.css';
import WebIntro from './WebIntro';

function Dog() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/breeds')
      .then(response => response.json())
      .then(data => {
        setDogs(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <WebIntro />
    </>
  );
}

export default Dog;
