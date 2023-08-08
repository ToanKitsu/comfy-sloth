import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from '../components';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomePage;
