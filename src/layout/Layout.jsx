import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../components/partials/header';
import Footer from '../components/partials/footer';

const Layout = () => {
  return (
    <div>
    {/* <div className='container mx-auto'> */}
      <Header />
      {<Outlet />}
      <Footer />
    </div>
  )
}

export default Layout
