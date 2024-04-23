import React from 'react';
import HomePage from './pages/HomePage';
import './Global.css'
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Bröllop Christian & Sara - Hällsnäs</title>
      </Helmet>
      <HomePage />
    </>
  );
}

export default App;
