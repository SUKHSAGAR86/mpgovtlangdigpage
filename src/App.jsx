import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandinPage from './components/mpinfo/LandinPage';
 
function App() {
  return (
    <Routes>
   <Route path="/" element ={<LandinPage/>}/>
    </Routes>
  );
}

export default App;
