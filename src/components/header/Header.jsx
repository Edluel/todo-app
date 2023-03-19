import React from 'react'
import { useState } from 'react';
import './header.css'
import sunIcon from '../../assets/images/icon-sun.svg';
import moonIcon from '../../assets/images/icon-moon.svg';

export default function Header(props) {
  const {theme, setTheme} = props;


  return (
    <div className="header">
      <div className="header-title">
        <h1>T O D O</h1>
      </div>
      <div className="header-img">
        <img src={theme === 'dark' ? sunIcon : moonIcon} alt="light/dark" />
      </div>
    </div>
  )
}
