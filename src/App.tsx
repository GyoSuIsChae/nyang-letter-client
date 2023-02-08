import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PATH_NAMES } from '@constants/pages';
import NickName from '@pages/Auth/NickName';
import OnBoarding from '@pages/Auth/OnBoarding';
import SignUp from '@pages/Auth/SignUp';
import ButtonTestPage from '@pages/ButtonTestPage';
import CafeList from '@pages/Cafe/CafeList';
import CreateCafe from '@pages/Cafe/CreateCafe';
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
      <Route path={PATH_NAMES.CAFE_CREATE} element={<CreateCafe />} />
      <Route path={PATH_NAMES.CAFE_LIST} element={<CafeList />} />
      <Route path="/button" element={<ButtonTestPage />} />
    </Routes>
  );
};

export default App;
