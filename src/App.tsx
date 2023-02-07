import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PATH_NAMES } from '@constants/pages';
import OnBoarding from '@pages/Auth/OnBoarding';
import ButtonTestPage from '@pages/ButtonTestPage';
import Home from '@pages/Home';
import ModalTestPage from '@pages/ModalTestPage';

const App: React.FC = () => {
  const accessToken = false;

  return (
    <Routes>
      <Route
        path={PATH_NAMES.HOME}
        element={
          accessToken ? (
            <Home />
          ) : (
            <Navigate to={PATH_NAMES.ON_BOARDING} replace />
          )
        }
      />
      <Route path={PATH_NAMES.ON_BOARDING} element={<OnBoarding />} />
      <Route path="/modal" element={<ModalTestPage />} />
      <Route path="/button" element={<ButtonTestPage />} />
    </Routes>
  );
};

export default App;
