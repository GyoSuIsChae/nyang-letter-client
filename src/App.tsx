import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '@components/Layout';
import ButtonTestPage from '@pages/ButtonTestPage';
import HomePage from '@pages/Home';
import ModalTestPage from '@pages/ModalTestPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/modal" element={<ModalTestPage />} />
        <Route path="/button" element={<ButtonTestPage />} />
      </Route>
    </Routes>
  );
};

export default App;
