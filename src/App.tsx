import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '@components/Layout';
import { PATH_NAMES } from '@constants/pages';
import OnBoarding from '@pages/Auth/OnBoarding';
import ButtonTestPage from '@pages/ButtonTestPage';
import Home from '@pages/Home';
import ModalTestPage from '@pages/ModalTestPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={PATH_NAMES.HOME} element={<Home />} />
        <Route path={PATH_NAMES.ON_BOARDING} element={<OnBoarding />} />

        <Route path="/modal" element={<ModalTestPage />} />
        <Route path="/button" element={<ButtonTestPage />} />
      </Route>
    </Routes>
  );
};

export default App;
