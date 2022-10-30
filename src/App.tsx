import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '@pages/Home';
import ModalTestPage from '@pages/ModalTestPage';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/modal" element={<ModalTestPage />} />
  </Routes>
);

export default App;
