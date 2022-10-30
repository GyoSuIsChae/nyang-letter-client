import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ButtonTestPage from '@pages/ButtonTestPage';
import HomePage from '@pages/Home';
import ModalTestPage from '@pages/ModalTestPage';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/modal" element={<ModalTestPage />} />
    <Route path="/button" element={<ButtonTestPage />} />
  </Routes>
);

export default App;
