import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/header.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Main from './pages/Main';
import AuthenLayout from './layouts/AuthenLayout/AuthenLayout';
import MainLayout from './layouts/MainLayout.tsx/MainLayout';
import ProjectManage from './components/Main/ProjectManage/ProjectManage';
import DetailProject from './components/Main/DetailProject/DetailProject';
import MainHome from './components/Main/Home/MainHome';
import LoadingOverlayComp from './components/LoadingOverlay/LoadingOverlayComp';
import CardModal from './components/Main/Modal/CardModal/CardModal';

function App() {
  return (
    <div className="App">
      <CardModal />
      <Routes>
        <Route path="/test" element={<LoadingOverlayComp />} />

        {/* Home */}
        <Route path="/" element={<Home />} />
        {/* Home */}

        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/main-app" element={<Main />}>
            <Route index element={<MainHome />} />
            <Route path="project-manage" element={<ProjectManage />} />
            <Route path="detail-project/:tableId" element={<DetailProject />} />
          </Route>
        </Route>
        {/* Main Layout */}

        {/* Authen Layout */}
        <Route element={<AuthenLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {/* Authen Layout */}
      </Routes>
    </div>
  );
}

export default App;
