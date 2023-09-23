import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='w-1/6 p-4 bg-slate-500'>
        <ul className='mb-4'>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subcriptions</li>
        </ul>
        <hr></hr>

        <ul className='mt-4'>
          <li>Library</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
        </ul>
    </div>
  )
}

export default Sidebar