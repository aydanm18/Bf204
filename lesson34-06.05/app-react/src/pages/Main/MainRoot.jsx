import React, { useState } from 'react'
import { Outlet } from 'react-router';
import Header from '../../components/Main/Header';
import Footer from '../../components/Main/Footer';

const MainRoot = () => {
  
  return (
    <>
    <Header/>
    <div className='container'><Outlet/></div>
    <Footer/>
    </>
  )
}

export default MainRoot