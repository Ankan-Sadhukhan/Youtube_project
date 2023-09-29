import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='w-1/6 h-full p-4 m-1 bg-slate-500'>
        <ul className='mb-4'>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subcriptions</li>
        </ul>
        <hr></hr>

        <ul className='mt-4 pb-4'>
          <li>Library</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
        </ul>

        <hr></hr>
        <ul className='mt-4 pb-4'>
          <h3 className='font-bold pb-2'>Explore</h3>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movie</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>

        </ul>
        <hr></hr>
        <ul className='mt-4'>
          <li>YouTube Premium</li>
          <li>YouTube Music</li>
          <li>YouTube Studio</li>
          <li>YouTube kids</li>
        </ul>

    </div>
  )
}

export default Sidebar