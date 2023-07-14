import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboardview from './components/Dashboardview'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='flex bg-[#f4f7f4] pb-8'>
      <div className='basis-[18%] h-[100vh]'>
        <Sidebar />
      </div>

      <div className='basis-[82%]'>
        <Dashboardview />
        <Routes>
          <Route path='/' element={<Navbar />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
