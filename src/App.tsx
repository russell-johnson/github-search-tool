import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserSearch from './UserSearch';
import { useState } from 'react';

function App() {
  const [darkMode, setMode] = useState(false)
  const toggleMode = () => {
    setMode(!darkMode);
  };
  
  return (
    <div className={darkMode ? "dark bg-main h-full flex align-center" : "light bg-main h-full flex align-center"}>
      <UserSearch toggleMode={toggleMode}/>
    </div>
  );  
}

export default App;
