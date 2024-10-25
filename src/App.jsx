import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import OurServices from './components/OurServices'
import CurvedFooter from './components/Footer'

function App() {

  return (
    <>
    <Header/>
    <OurServices/>
    <CurvedFooter/>
    </>
  )
}

export default App
