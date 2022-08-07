import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Pages/HomePage/HomePage';
import 'tw-elements';
import NavBar from './Components/Component/NavBar/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
      </Routes>   
    </div>
  );
}

export default App;
