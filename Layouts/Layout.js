import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'


const Layout = ({children}) => {
  return (
    <>
     <Navbar />
     <Header />
     {children} 
     <Footer />
    </>
  )
}

export default Layout
