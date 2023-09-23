import React from 'react'

const Head = () => {
  return (
    <div className='shadow-lg mt-2 py-2 flex place-content-between'>
        <div className='flex p-2'>
            <img className='w-14 pl-2 pr-4' alt='icon' src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png'/>
            <img className='w-11' alt='youtube' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9GjL8ToPEENF1jpI9Awl4KqFubik54L_pHg&usqp=CAU'/>
        </div>
        <div className=''>
            <input className='border-2 p-1  pl-4 rounded-l-full' type="text" placeholder="Search"/>
            <button className='border-2 p-1  rounded-r-full'>Search</button>
        </div>
        <div className='pr-8'>
            <img className='w-10' alt='user' src='https://cdn-icons-png.flaticon.com/512/666/666201.png'/>
        </div>
    </div>
  )
}

export default Head