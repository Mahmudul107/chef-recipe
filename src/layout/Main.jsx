import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header/>
            <div className='min-h-[calc(100vh-130px)]'> 
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;