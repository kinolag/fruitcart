import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';

import Header from './frontend/Header';
import Main from './frontend/Main';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export default App;
