import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

const Main_Layout = () => {
  return (
    <div className='min-h-screen bg-yellow-100' >
      <Header />
    <main className=' pt-20 '>
      <Outlet />
    </main>
    </div>
  )
}
export default Main_Layout