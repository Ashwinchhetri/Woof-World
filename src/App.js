import React from 'react'
import './App.css';
import Doggie from './doggii';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleDog from './SingleDog';

const App = () => {
  return (
    <>
      <BrowserRouter basename='/Woof-World'>
        <Routes>
          <Route path="/" element={<Doggie />}></Route>
          <Route path="/:name" element={<SingleDog />}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
