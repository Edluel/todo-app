import React from 'react'
import { useState } from 'react';
import './header.css'
import sunIcon from '../../assets/images/icon-sun.svg';
import moonIcon from '../../assets/images/icon-moon.svg';

export default function Header(props) {
  const {theme, setTheme} = props;
  const [isRotating, setIsRotating] = useState(false);

  const handleTheme = () => {
    setIsRotating(true);
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
    setTimeout(() => {
      setIsRotating(false);
    }, 3000);
  }

  return (
    <div className={`header ${theme}`}>
      <div className="header-title">
        <h1>T O D O</h1>
      </div>
      <div className="header-img">
        <img 
          onClick={handleTheme} 
          src={theme === 'dark' ? sunIcon : moonIcon} 
          alt="light/dark" 
          className={isRotating ? 'rotate' : ''}
        />
      </div>
    </div>
  )
}
