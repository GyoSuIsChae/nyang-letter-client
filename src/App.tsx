import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '@/pages/homePage';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
);

export default App;
