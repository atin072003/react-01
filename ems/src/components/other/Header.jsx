import React from 'react'
import TaskListNumber from './TaskListNumber'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
   // window.location.reload()
  }


  return (
    <div className='flex items-center justify-between '>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>userName<span className='animate-pulse'>👋</span></span></h1>
      <button onClick={logOutUser} className='bg-red-500 px-2 py-1 rounded-xl  text-white font-semibold animate-pulse active:scale-95 active:bg-yellow-400'>Log out</button>
      
    </div>
  )
}

export default Header
