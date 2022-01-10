import React from 'react';

import Layout from '../layout/Layout';
import NavBar from '../layout/NavBar';
import Routes from '../routes';

import { HashRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Layout left={<NavBar />} right={<Router><Routes /></Router>} />
    </div>
  );
}

export default App;
