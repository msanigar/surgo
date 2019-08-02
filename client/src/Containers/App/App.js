import React from 'react';
import Styles from './App.scss';

import Nav from '../../Components/Nav'
import Home from '../../Components/Home'

const { appContainer } = Styles;

const App = () => {
  return (
    <div className={appContainer}>
      <Home />
      <Nav />
    </div>
  );
}

export default App;
