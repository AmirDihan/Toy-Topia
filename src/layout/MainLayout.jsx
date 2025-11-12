import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div className='min-h-screen flex flex-col mx-auto'>
          <Navbar></Navbar> 
          <div className='flex-1 max-w-11/12 mx-auto m-10 bg-base-200 p-10 rounded-2xl'>
            <Outlet></Outlet>
          </div>
          <Footer></Footer> 
        </div>
    );
};

export default MainLayout;