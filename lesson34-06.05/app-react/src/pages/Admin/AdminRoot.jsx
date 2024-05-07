import React from 'react'
import Header from '../../components/Admin/Header'
import Footer from '../../components/Admin/Footer'
import { Outlet } from 'react-router'

const AdminRoot = () => {
    return (
        <>
        <Header/>
        <div className='container'><Outlet/></div>
        <Footer/>
        </>
    )
}

export default AdminRoot