import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div className='min-h-screen flex flex-col mx-auto'>
          <Navbar></Navbar> 
          <div className='flex-1 max-w-11/12 mx-auto my-10'>
            <Outlet></Outlet>
          </div>
          <Footer></Footer> 
        </div>
    );
};

export default MainLayout;