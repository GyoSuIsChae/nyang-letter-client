import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PATH_NAMES } from '@constants/pages';
import HomePage from '@pages/Home';
import ModalTestPage from '@pages/ModalTestPage';
import OnBoarding from '@pages/OnBoarding';

const App: React.FC = () => {
  const accessToken = false;

  return (
    <Routes>
      <Route
        path={PATH_NAMES.HOME}
        element={
          accessToken ? (
            <HomePage />
          ) : (
            <Navigate to={PATH_NAMES.ON_BOARDING} replace />
          )
        }
      />
      <Route path={PATH_NAMES.ON_BOARDING} element={<OnBoarding />} />
      <Route path="/modal" element={<ModalTestPage />} />
    </Routes>
  );
};

export default App;
