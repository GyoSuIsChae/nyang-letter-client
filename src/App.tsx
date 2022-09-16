import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '#pages/home-page';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
);

export default App;
