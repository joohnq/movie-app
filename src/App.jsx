import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'

export const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <h2>Movies Lib</h2>
        <Outlet />
    </div>
  )
}
