import React from 'react';
import Routes from './routes';
import initializeLocalStorage from './utils/data';

import './styles/global.css';
import './styles/header.css';

function App() {
  initializeLocalStorage();

  return (
    <Routes />
  );
}

export default App;
