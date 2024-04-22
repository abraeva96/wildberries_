import React from 'react'
import Nav from '../../Components/Nav/Nav'
import { Outlet } from 'react-router-dom'
// import Footer from '../../Components/Footer/Footer'


const HomeLayout = () => {
  return (
   <>
   <Nav/>
   <Outlet/>
   {/* <Footer/> */}
   
   </>
  )
}

export default HomeLayout