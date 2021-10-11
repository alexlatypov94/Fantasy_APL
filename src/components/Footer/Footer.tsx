import React from 'react';
import { DEVELOPERS } from './constants';
import './Footer.scss';

export const Footer: React.FC = () => {
  const renderDevops = DEVELOPERS.map((el) => (
    <a href={el.gitHub} key={el.name} target="blank">
      {el.name}
    </a>
  ));

  return (
    <footer className="footer">
      <div className="developers">{renderDevops}</div>
    </footer>
  );
};
