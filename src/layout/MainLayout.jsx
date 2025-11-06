import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
          <Navbar></Navbar> 
          <div className='flex-1'>
            <Outlet></Outlet>
          </div>
          <Footer></Footer> 
        </div>
    );
};

export default MainLayout;