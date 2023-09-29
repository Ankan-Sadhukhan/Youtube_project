import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

  const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  };

  return (
    <div className='shadow-lg mt-2 py-2 flex place-content-between'>
        <div className='flex w-20 p-2'>
            <img onClick={()=>toggleMenuHandler()} className='w-14 pl-2 pr-4 cursor-pointer' alt='icon' src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png'/>
            <img className='scale-150' alt='youtube' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAA/CAMAAADt7Ke5AAAAn1BMVEX////+AAAAAAAaGhrIyMgjIyMgICBBQUHq6uoNDQ0cHBxfX19lZWWEhITLy8uwsLApKSn+hobh4eH+gIHZ2dnw8PD5+fkuLi5vb2+NjY0VFRVXV1e5ubk2NjaZmZn9amj9nZ39t7j9XlxOTk56enr+9PT+39/9xcP+qKn9lJP+6Oj8LSn8VVWkpKT9eXn919b9IiD9Ojn8RUb8r678cHFP8YHLAAAC6UlEQVRYhe2W3XqiMBCGx4FEAiopFRQUqvW/W9ttu/d/bTsD6CIo0oM+zx7kO1AnDvOSZGYSACMjIyMjIyMjox/UZrtbLveLw0Opw2K/XO5eNj9L3f/q3dDr+/ejjQeDYyfHt1tUFoMDRE1fI8RZ/dnIwlLj05CNatgFu23D9l7ZJRUYAWSJ8htckSRaayupcq1O3H0rt0dAGLo4AhhIDBrcLMtSLeMsdr7LbV3mXm/LoVRCWyZE/2qAvlBhxezKfa5Afje5S3IJlTulXXY5XhTWAxDXqZgF9+TVdD/powJ52H7WuV/ss5J9mCtlg+MpTAYUK04nPox0Oi25/2wb3diWKHjDfY0oGklRqAp5BPiqcRfsQykVxhZG0cS1UCYebbmFPiO8kju0KOlG6A5oUMyoAOSKp05czblxnwvwcME98NAY0fbcGRwVrfVMUPIOXcVcWeNK5upkPCZcBCuqgwDltBsXXl6rS5/vkrayCeXWVNLLHxN1bOVyHkw0vRxyJloi7cgFONS4MHX7Wo1pn+nDTyjwPS4tyiikFQfQGjtyN9XSKri+EjqNCEGz8BWt3D2uJ5Ud5NxJV+5lI8n3FxzULqeu7sK1zlydrtcd57ur1XDBpVap5nCar9uZK6hzq+vci/rdPPdq2hde1CTtHPGt+YpZ6DhOo7vmqpI+6tSiX5E8UeG66ybXveRyXjn5/obRVey9/vxe5XpCcR0l2Zlzi5tSJkQoqHmsEnmVu2jnbqrcmEt3zUs+tKwYMnXmxmwfVc6lwSDvG6mwABJ5/Th5b8V+QpVLbcjqu5Iqak4JLtL+mUu2JDvvk1qoRNMbwJEaB53dN64fT23cXem0QuaCz1cLSYkSpfQj8PgGMkF08k+V2zbi3OM/ORvZfX0dW2/IVX2csBCGRX5EI7u8WYyo3YdOyH85ZzsM6eSjsaA8CxzbvnkQUrDt8osvk29/nlh/3h7pSrmnC+XtR4yMjIyMjIyMjP4L/QW7dTcogT+VswAAAABJRU5ErkJggg=='/>
            
        </div>
        <div className=''>
            <input className='border-2 p-1  pl-4 rounded-l-full' type="text" placeholder="Search"/>
            <button className='border-2 p-1  rounded-r-full'>Search</button>
        </div>
        <div className='pr-8'>
            <img className='w-12 p-2' alt='user' src='https://cdn-icons-png.flaticon.com/512/666/666201.png'/>
        </div>
    </div>
  )
}

export default Head