import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Footer></Footer>
    </div>
  );
};
