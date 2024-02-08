/*
This file is created for the layout of the website. 
As we want our header and footer to stay still and only our middle scetion to dynamically change without reload.
Here we will be using Outlet from react router dom.
Outlet : contents can be change and it is created based on the current layout. so here Header and Footer will be same
but the Outlent content will keep changing.
*/

import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'




function Layout() {
  return (
    <>
    <Header />
    < Outlet />
    <Footer />
    </>
  )
}

export default Layout