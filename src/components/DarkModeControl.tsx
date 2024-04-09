import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon} from '@heroicons/react/24/solid';
import {setMode} from '../utils/theme';


const DarkModeControl: React.FC= () => { 
  const toggleMode = () => {
    setMode()
  }
  return (
    <div className='hover:cursor-pointer' onClick={toggleMode}>
      <div className='dark-on hover:text-hover text-standard flex items-center space-x-2 flex-end'>
        <h4>LIGHT</h4> <SunIcon className='h-7 hover:text-hover' />
      </div>
      <div className='light-on hover:text-hover text-standard flex items-center space-x-2 flex-end'>
        <h4>DARK</h4> <MoonIcon className='h-7 hover:text-hover' />
      </div>
    </div>
  );
};

export default DarkModeControl;
