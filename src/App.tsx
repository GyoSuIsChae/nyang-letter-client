import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PATH_NAMES } from '@constants/pages';
import NickName from '@pages/Auth/NickName';
import OnBoarding from '@pages/Auth/OnBoarding';
import SignUp from '@pages/Auth/SignUp';
import ButtonTestPage from '@pages/ButtonTestPage';
import Home from '@pages/Home';

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
      <Route path={PATH_NAMES.SIGN_UP} element={<SignUp />} />
      <Route path={PATH_NAMES.NICKNAME} element={<NickName />} />
      <Route path="/button" element={<ButtonTestPage />} />
    </Routes>
  );
};

export default App;
