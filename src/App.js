import React from 'react'
import './App.css'
import Home from "./page/Home"
import Header from "./components/Header"
import Footer from './components/Footer'
import HeaderCard from './components/Header-card/HeaderCard'

const App = () => {
  return (
    <>
    <Header />
      {/* <Home/> */}
      <HeaderCard />
      <Footer />
    </>
  )
}

export default App
