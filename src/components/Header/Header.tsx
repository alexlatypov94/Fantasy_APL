import React from 'react';
import { Navigation } from './Navigation';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header>
      <a href="#" className="header-logo">
        <img src="./../../assets/images/header-logo-desktop.svg" alt="" />
      </a>
      <Navigation />
    </header>
  );
};
