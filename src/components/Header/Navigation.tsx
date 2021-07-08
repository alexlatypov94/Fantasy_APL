import React from 'react';
import { LIST_ITEM } from './constants';

export const Navigation: React.FC = () => {
  const renderListItem = Object.values(LIST_ITEM).map((el) => (
    <li key={el}>
      <a href="#">{el}</a>
    </li>
  ));
  
  return (
    <nav>
      <ul className="header-nav-list">{renderListItem}</ul>
    </nav>
  );
};
